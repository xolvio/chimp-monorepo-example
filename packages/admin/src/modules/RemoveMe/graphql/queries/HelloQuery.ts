import {acknowledge} from '@monorepo/common-library/src/acknowledge'
import {QueryResolvers} from '~admin-generated/graphql/types'

export const HelloQuery: QueryResolvers['Hello'] = (parent, args, context) => {
  return acknowledge(args.greeting)
}
