'use strict';

import { visit } from 'unist-util-visit';
import { u } from 'unist-builder';
import dedent from 'dedent';

const parseParams = (paramString = '') => {
  const params = Object.fromEntries(new URLSearchParams(paramString));

  if (!params.platform) {
    params.platform = 'web';
  }

  return params;
};

const processNode = (node: any, parent: any) => {
  try {
    const params = parseParams(node.meta);

    const name = params.name ? decodeURIComponent(params.name) : parent.children[0]?.children[0]?.value || 'Example';
    const description = params.description
      ? decodeURIComponent(params.description)
      : 'Example usage';
    const sampleCode = node.value;
    const encodedSampleCode = encodeURIComponent(sampleCode);
    const dependencies = params.dependencies || '@nutui/nutui-react-native,expo-linear-gradient';
    const platform = params.platform || 'mydevice';
    const supportedPlatforms = params.supportedPlatforms || 'mydevice,ios,android,web';
    const theme = params.theme || 'light';
    const preview = params.preview || 'false';
    const loading = params.loading || 'lazy';

    // Generate Node for SnackPlayer
    // See https://github.com/expo/snack/blob/main/docs/embedding-snacks.md
    const snackPlayerDiv = u('html', {
      value: dedent`<div
        id="snack-player-${Math.random()}"
        class="snack-player"
        data-snack-name="${name}"
        data-snack-description="${description}"
        data-snack-code="${encodedSampleCode}"
        data-snack-dependencies="${dependencies}"
        data-snack-platform="${platform}"
        data-snack-supported-platforms="${supportedPlatforms}"
        data-snack-theme="${theme}"
        data-snack-preview="${preview}"
        data-snack-loading="${loading}"
      ></div>`,
    });

    // Replace code block with SnackPlayer Node
    const index = parent.children.indexOf(node);

    parent.children.splice(index, 1, snackPlayerDiv);

  } catch (e) {
    return console.log(e);
  }
};

const SnackPlayer = () => {
  return (tree: any) =>
    visit(tree, 'code', (node, index, parent) => {
      if (node.lang == 'SnackPlayer') {
        processNode(node, parent);
      }
    });
};

export default SnackPlayer;
