import Route from '@ember/routing/route';
import { service } from '@ember/service';
// const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];
export default class IndexRoute extends Route {
//   async model() {
//     let response = await fetch('/api/rentals.json');
//     //    let parsed = await response.json();
//     //    return parsed;
//     let { data } = await response.json();

//     return data.map((model) => {
//       let { id, attributes } = model;
//       let type;
    @service store

    //   if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
    //     type = 'Community';
    //   } else {
    //     type = 'Standalone';
    //   }

    //   return { id, type, ...attributes };
    // });
    async model(){
        return this.store.findAll('rental');
    }
  }

