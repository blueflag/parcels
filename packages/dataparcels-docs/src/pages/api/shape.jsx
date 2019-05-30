// @flow
import React from 'react';
import Layout from 'layout/Layout';
import ContentNav from 'shape/ContentNav';
import ShapeMarkdown from 'pages/api/shape.mdx';

export default () => <Layout>
    <ContentNav
        content={() => <ShapeMarkdown />}
        pageNav={[
            '# shape'
        ]}
    />
</Layout>;
