
// import createSchema from 'part:@sanity/base/schema-creator'

// First, we must import the schema creator
// import createSchema from 'part:@sanity/base/schema-creator';
// // Then import schema types from any plugins that might expose them
// import schemaTypes from 'all:part:@sanity/base/schema-type';
import user from './user'
import pin from './pin'
import comment from './comment'
import postedBy from './postedBy'
import save from './save'
// export default createSchema({
//     name: 'default',
//     types: schemaTypes.concat([
//         user
//     ])
// })
export const schemaTypes = [user,pin,comment,postedBy,save]