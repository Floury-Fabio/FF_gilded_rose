var { CommonItem } = require('../src/js/commonItem.js');

describe("CommonItem", function () {

  describe("#updateQuality", function(){

    it("Lower of one the sellIn", function(){

      let commonItem = new CommonItem("Vest", 10, 20)

      commonItem.updateQuality()

      expect(commonItem.sellIn).toBe(9)
    })

    it("The quality can't be negative", function(){

      let commonItem = new CommonItem("Vest", 10, 0)

      commonItem.updateQuality()

      expect(commonItem.quality).not.toBeLessThan(0)
    })

    describe("When the item is not outDated", function(){
      it("Lower of one the quality", function (){

        let commonItem = new CommonItem("Vest", 10, 20)

        commonItem.updateQuality()

        expect(commonItem.quality).toBe(19)
      })

    })
    
    describe("When the item is outDated", function(){
      it("Lower of two the quality", function (){

        let commonItem = new CommonItem("Vest", 0, 20)

        commonItem.updateQuality()

        expect(commonItem.quality).toBe(18)
      })

    })
  })
})

