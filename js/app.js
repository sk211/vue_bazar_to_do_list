var app = new Vue({
    el: '#app',
    computed:{
        total(){
            var total = 0
            this.items.forEach(item => { total = total + parseFloat(item.price)
                
            })
            return total
        }
    },

    data: {
     items: [
         {name:'poteto', price: 10.0},
         {name:'rice', price: 20.0},
         {name:'vagitable', price: 20.0}
         
     ],

     newItme : ''
    },
  
    methods:{
        addItem() {
            this.items.push({
                name: this.newItem,
                price:0.0
            })
            this.newItem = ''
            
        },
        removeItem(index){
            this.items.splice(index , 1)
        }
    }
  })
//   var app = new Vue({
//     el: '#app',
//     computed: {
//       total() {
//         var total = 0
//         this.items.forEach(item => {
//           total = total + parseFloat(item.price)
//         })
//         return total
//       }
//     },
//     data: {
//       items: [
//         { name: 'rice', price: 55.5 },
//         { name: 'potato', price: 15.0 },
//         { name: 'oil', price: 120.0 }
//       ],
//       newItem: ''
//     },
//     methods: {
//       addItem() {
//         this.items.push({
//           name: this.newItem,
//           price: 0.00
//         })
//         this.newItem = ''
//       },
//       removeItem(index) {
//         this.items.splice(index, 1)
//       }
//     }
//   })

 