import { assert } from "chai"
import { describe, it } from "mocha"
import Flux from "../models/possessions/Flux.js"
import Personne from "../models/Personne.js"

describe("Test about salary evaluation", () => {

    var Ilo = new Personne("Ilo");

    it("should return 2_000", () => {
        
        const salary = new Flux(
            Ilo, 
            "salary", 
            1000, 
            new Date("2024-3-3"), 
            null, 
            0, 
            3);

        assert.equal(salary.getValeur(new Date("2024-3-3")), 2_000);

    });

    it("should return 10_000", () => {
        const salary = new Flux(
            Ilo, 
            "salary", 
            2500,
            new Date("2024-3-3"), 
            null, 
            0, 
            3);

        assert.equal(salary.getValeur(new Date("2024-5-3")), 10_000);
    });

    it("should return 3_000_000", () => {
        const salary = new Flux(
            Ilo, 
            "salary", 
            600_000, 
            new Date("2024-3-3"), 
            null, 
            0, 
            15);

        assert.equal(salary.getValeur(new Date("2024-6-15")), 3_000_000);
    });
})


describe("Test about spending evaluation", () => {
    
    var Ilo = new Personne("Ilo");

    it("should return a -100_000", () => {
        const spending = new Flux(
            Ilo, 
            "salary", 
            -100_000, 
            new Date("2024-3-3"), 
            null, 
            0, 
            1);

        assert.equal(spending.getValeur(new Date("2024-3-3")), -100_000);
    })

    it("should return -240_000", () => {
        const spending = new Flux(
            Ilo, 
            "salary", 
            -120_000, 
            new Date("2024-3-3"), 
            null, 
            0, 
            2);

        assert.equal(spending.getValeur(new Date("2024-4-6")), -240_000);
    });
})