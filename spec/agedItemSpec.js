var { AgedItem } = require('../src/js/agedItem.js');

describe("AgedItem", function () {

  describe("#updateQuality", function(){

    it("Lower of one the sellIn", function(){

      let agedItem = new AgedItem("Graal", 10, 20)

      agedItem.updateQuality()

      expect(agedItem.sellIn).toBe(9)
    })

    it("The quality can't be greater than 50", function(){

      let agedItem = new AgedItem("Graal", 10, 50)

      agedItem.updateQuality()

      expect(agedItem.quality).not.toBeGreaterThan(50)
    })

    describe("When the sellIn is greater than 10", function(){
      it("Increase of one the quality", function (){

        let agedItem = new AgedItem("Graal", 11, 20)

        agedItem.updateQuality()

        expect(agedItem.quality).toBe(21)
      })
    })

    describe("When the sellIn is less or equal than 10 and greater than 5", function(){
      it("Increase of two the quality", function (){

        let agedItem = new AgedItem("Graal", 8, 20)

        agedItem.updateQuality()

        expect(agedItem.quality).toBe(22)
      })
    })
    
    describe("When the sellIn is less or equal than 5 and greater than 0", function(){
      it("Increase of three the quality", function (){

        let agedItem = new AgedItem("Graal", 3, 20)

        agedItem.updateQuality()

        expect(agedItem.quality).toBe(23)
      })
    })

    describe("When the sellIn is less or equal than 0", function(){
      it("Increase of one the quality", function (){

        let agedItem = new AgedItem("Graal", 0, 20)

        agedItem.updateQuality()

        expect(agedItem.quality).toBe(0)
      })
    })
  })
})

