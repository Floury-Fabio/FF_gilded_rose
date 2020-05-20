import {Item} from './item'

class LegendaryItem extends Item {
  constructor(name, quality){
    super(name, undefined, quality)
  }

  updateQuality(){
  }
}

export {LegendaryItem} 
