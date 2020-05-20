import {Item} from './item'

class CommonItem extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }

  updateQuality(){
    
    if (this.sellIn <= 0)
      this.quality--

    this.quality--

    if (this.quality < 0)
      this.quality = 0

    this.sellIn--
  }
}

export {CommonItem} 
