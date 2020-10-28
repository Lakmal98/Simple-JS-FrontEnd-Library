import Base from './componets/Base.js'

import './componets/home/user-comp.js'

export default class Main extends Base {

    css = `
    .container {
        margin: 5rem auto;
        display: table;
    }

    @media screen and (max-width: 1200px) {
      
    }
  
    @media screen and (max-width: 992px) {
        .container {
            display: grid;
            grid-template-columns: auto;
            justify-content: center;
        }
    }
  
    @media screen and (max-width: 768px) {
        
    }
  
    @media screen and (max-width: 512px) {
       
    }
    
`
    content = `
        <div class="container">
            <user-comp mirror="true" route="add-new-property" id="add-new-property">
                <img slot="image" defer src="https://media.istockphoto.com/photos/for-rent-sign-in-front-of-new-house-picture-id149060607?k=6&m=149060607&s=612x612&w=0&h=9CQCG-T1Oq2vgBjUEJbxny1OqJAbs6FpbhTQZK36Lxg=" alt="Image"></img>
                <h1 slot="title">Rent or Lease your own property</h1>
            </user-comp>
            <user-comp mirror="true" route="property" id="find-property">
                <img slot="image" defer src="https://s3.amazonaws.com/clients.granalacantadvertiser.images/wp-content/uploads/2017/06/14072232/2236775_2_O.jpg" alt="Image"></img>
                <h1 slot="title">Looking for a place</h1>
            </user-comp>
        </div>
`
    constructor() {
        super()
        this.mount()
    }

}//End of Class

window.customElements.define('main-comp', Main)