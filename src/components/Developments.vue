<template>
    <div class="b-devs">
        <div class="b-devs__filter">
            <span>Filter</span>
            <input type="text" v-model="search">
        </div>
        <div class="b-devs__list">
            <div v-for="(dev, ind) in devsFiltered" :key="ind" class="b-devs__item">
                <a class="b-devs__link" :href="'/details/'+dev.id"></a>
                <div class="b-devs__img">
                    <img src="https://via.placeholder.com/300.png/09f/fff" alt="">
                    <div class="b-devs__label" v-if="dev.type == 'IndependentLiving'">Independent living</div>
                    <div class="b-devs__label is-orange" v-if="dev.type == 'SupportAvailable'">Restaurant & Support available</div>
                </div>
                <div class="b-devs__content">
                    <div class="b-devs__title">{{dev.title}}</div>
                    <div class="b-devs__text">{{dev.address}}</div>
                    <div class="b-devs__price">New Properties for Sale from <span>£{{dev.price}}</span></div>
                    <div class="b-devs__text-sm">Shared Ownership Available</div>
                </div>
            </div>
        </div>
        <div class="page-btn">
            <span>See more</span>
            <svg class="icon">
                <use xlink:href="#next"></use>
            </svg>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
export default {
  data() {
    return {
        devs:[],
        search:''
    }
  },
  created () {
    axios.get('https://603e38c548171b0017b2ecf7.mockapi.io/homes')
        .then(response => {
            this.devs = response.data
            this.devs.forEach(element => {
                element.price = element.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            });
        }).catch(e => {
            console.log(e)
		})


  },
  computed:{
    devsFiltered () {
        let array = this.devs,
            search = this.search
        if(!search) return array
        search = search.trim().toLowerCase()
        if(search.length >=3) {
            array = array.filter(function(item) {
                if(item.title.toLowerCase().indexOf(search) !== -1) {
                    return item
                }
            })
       }
        return array
    }
  }
}
</script>

