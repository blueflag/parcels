// @flow
import React from 'react';
import Layout from 'layout/Layout';
import ContentNav from 'shape/ContentNav';
import DataSynchronisationMarkdown from './data-synchronisation.mdx';

export default () => <Layout>
    <ContentNav
        content={() => <DataSynchronisationMarkdown />}
        pageNav={[
            '# Data synchronisation',
            'Saving data from a form',
            'Changing or clearing form data after save'
        ]}
    />
</Layout>;
