// @flow
import type {Node} from 'react';
import React from 'react';
import {Box, Grid, GridItem, NavigationList, NavigationListItem, Text, Typography} from 'dcme-style';
import Link from 'gatsby-link';
import Markdown_Parcel from '../../docs/api/parcel/Parcel.md';
import Markdown_get from '../../docs/api/parcel/get.md';

const md = {
    get: Markdown_get
}

const api = `
# Get methods
value
meta
data
raw

# Parent get methods
get
getIn
toObject
toArray
has
size

# Spread methods
spread
spreadDOM

# Change methods
onChange
onChangeDOM
setSelf
updateSelf
setMeta
updateMeta
setChangeRequestMeta
dispatch
batch
ping

# Parent change methods
set
setIn
update
updateIn

# Indexed change methods
delete
insertAfter
insertBefore
push
pop
shift
swap
swapNext
swapPrev
unshift

# Child change methods
deleteSelf

# Element change methods
insertAfterSelf
insertBeforeSelf
swapWithSelf
swapNextWithSelf
swapPrevWithSelf

# Modify methods
modify
modifyData
modifyValue
modifyChange
modifyChangeValue
initialMeta
addModifier
addDescendantModifier

# Type methods
isChild
isElement
isIndexed
isParent
isTopLevel

# Id methods
key
id
path

# Status methods
hasDispatched

`;

const renderApi = () => api
    .split('\n')
    .map((line: string): Node => {
        if(line.slice(0,2) === "# ") {
            return line.slice(2);
        }
        if(!line) {
            return <br />;
        }
        return <Link className="Link" to={`#${line}`}>{line}</Link>;
    })
    .map(line => <NavigationListItem>{line}</NavigationListItem>);

const renderDoclets = () => api
    .split('\n')
    .filter(_ => _)
    .map(name => {
        let Component = md[name];
        if(!Component) {
            return null;
        }
        return <Box modifier="marginBottomMega">
            <a name={name} />
            <Text element="h3" modifier="sizeKilo marginKilo">{name}()</Text>
            <Typography>
                <Component />
            </Typography>
        </Box>;
    })
    .filter(_ => _);

export default () => <Box>
    <Grid>
        <GridItem modifier="9 padding">
            <Typography>
                <Markdown_Parcel />
            </Typography>
            {renderDoclets()}
        </GridItem>
        <GridItem modifier="3 padding">
            <NavigationList>
                <NavigationListItem>Parcel</NavigationListItem>
                {renderApi()}
            </NavigationList>
        </GridItem>
    </Grid>
</Box>;