var { LegendaryItem } = require('../src/js/legendaryItem.js');

describe("LegendaryItem", function () {

  it("The legendaryItem haven't sellIn", function (){
    
    let legendaryItem = new LegendaryItem("sulfu", 20)

    expect(legendaryItem.sellIn).not.toBeDefined()
  })

  describe("#updateQuality", function(){

    it("The quality of legendaryItem doesn't decrease", function (){

      let legendaryItem = new LegendaryItem("sulfu", 20)

      legendaryItem.updateQuality()

      expect(legendaryItem.quality).toBe(20)
    })

  })

})

