import { visit } from 'unist-util-visit';
const myRemarkPlugin = () => {
  return (tree: any) => {
    visit(tree, (node) => {
      if (node.type === 'containerDirective') {
        if (node.name !== 'demo') return;

        const data = node.data || (node.data = {});

        data.hName = 'div';
        data.hProperties = {
          class: 'nutui-react--demo-wrapper',
        };
      }
    });
  };
};

export default myRemarkPlugin;
