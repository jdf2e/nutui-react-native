import React, {
    FunctionComponent,
    ReactNode
} from 'react';

import {
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';

import pt from '../utils/pt';

interface ContentProps {
  visible?: boolean;
  title?: any;
  footer?: ReactNode;
  textAlign?: string;
  content?: any;
  footerDirection?: string;
  onClickSelf?: () => void
}

const Content: FunctionComponent<
  Partial<ContentProps>
> = (props) => {
    const {
        visible,
        title,
        footer,
        textAlign,
        footerDirection,
        onClickSelf,
        content,
        children
    } = props;

    if (!visible) {
        return <View />;
    }

    let headerNode: ReactNode;

    if (title) {
        headerNode = (
            <View
                style={styles.header}
            >
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        );
    }

    let footerNode: ReactNode;

    if (footer) {
        const footerStyle = [
            styles.footerWrap,
            styles[`footer${footerDirection}`]
        ];
        footerNode = (
            <View
                style={footerStyle}
            >
                {footer}
            </View>
        );
    }

    const handleClick = () => {
        onClickSelf && onClickSelf();
    };

    const renderChildren = () => {
        if (typeof children === 'string') {
            return (
                <Text
                    style={styles.text}
                >
                    {children}
                </Text>
            );
        }
        if (children) {
            return children;
        }

        if (typeof content === 'string') {
            return (
                <Text
                    style={styles.text}
                >
                    {content}
                </Text>
            );
        }

        return content;
    };

    const wrapStyle = [
        styles.contentStyle
    ];

    return (
        <View
            style={wrapStyle}
        >
            {headerNode}

            <ScrollView
                style={styles.scroll}
                showsVerticalScrollIndicator={false}
            >
                {renderChildren()}
            </ScrollView>

            {footerNode}
        </View>
    );
};

Content.displayName = 'NutContent';

export default Content;

const styles = StyleSheet.create({
    contentStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: pt(592),
        minHeight: pt(312),
        paddingTop: pt(56),
        paddingLeft: pt(48),
        paddingRight: pt(48),
        paddingBottom: pt(32),
        borderRadius: pt(24)
    },
    scroll: {
        marginTop: pt(30)
    },

    header: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'

        // height: pt(40)
    },
    title: {
        fontSize: pt(40),
        fontWeight: 'bold',
        color: 'rgba(38, 38, 38, 1)'
    },
    footerWrap: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    footervertical: {
        flexDirection: 'column'
    },
    footerhorizontal: {
        flexDirection: 'row'
    },
    text: {
        fontSize: pt(24),
        color: '#757575',
        textAlign: 'center'
    }
});
