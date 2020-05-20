var { ConjuredItem } = require('../src/js/conjuredItem.js');

describe("ConjuredItem", function () {

  it("have a name prefixed with 'Conjured'", function(){

    let conjuredItem = new ConjuredItem("skull", 10, 20)

    expect(conjuredItem.name).toMatch(/^Conjured.*/)
  })

  describe("#updateQuality", function(){

    it("Lower of one the sellIn", function(){
      
      let conjuredItem = new ConjuredItem("skull", 10, 20)

      conjuredItem.updateQuality()

      expect(conjuredItem.sellIn).toBe(9)

    })

    it("The quality can't be a negative", function(){
      
      let conjuredItem = new ConjuredItem("skull", 10, 0)

      conjuredItem.updateQuality()

      expect(conjuredItem.quality).not.toBeLessThan(0)

    })


    describe("When the sellIn is not outDated", function (){

      it("Lower of two the quality of conjuredItem", function (){

        let conjuredItem = new ConjuredItem("skull", 10, 20)

        conjuredItem.updateQuality()

        expect(conjuredItem.quality).toBe(18)
        
      })

    })

    describe("When the sellIn is outDated", function (){

      it("Lower of four the quality of conjuredItem", function (){

        let conjuredItem = new ConjuredItem("skull", 0, 20)

        conjuredItem.updateQuality()

        expect(conjuredItem.quality).toBe(16)
        
      })

    })
  })
})

