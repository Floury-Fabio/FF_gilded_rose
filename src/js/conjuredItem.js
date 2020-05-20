import {Item} from './item'

class ConjuredItem extends Item {
  constructor(name, sellIn, quality){
    super(`Conjured ${name}`, sellIn, quality)
  }

  updateQuality(){
    
    if (this.sellIn <= 0)
      this.quality -= 2

    this.quality -= 2
    this.sellIn--

    if (this.quality < 0)
      this.quality = 0
  }
}

export {ConjuredItem} 
