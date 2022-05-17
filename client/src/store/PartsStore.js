import {makeAutoObservable} from "mobx";

export default class PartsStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Двигатель'},
            {id: 2, name: 'Кузов'},
            {id: 3, name: 'Подвеска'},
            {id: 4, name: 'Рычаги'},
        ]
        this._brands = [
            {id: 1, name: 'BorgWarner'},
            {id: 2, name: 'Dmax'},
            {id: 3, name: 'RocketBunny'},
            {id: 4, name: 'Veilside'}
        ]
        this._parts = [
            {id: 1, name: "2JZ-GTE", price: 2000, rating: 5, img:'https://avtoexperts.ru/wp-content/uploads/2018/10/2JZ-GTE-2.jpg'},
            {id: 2, name: "1JZ-GTE", price: 1500, rating: 5, img:'https://jdmkingmotors.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/img_4273.jpg'},
            {id: 3, name: "Капот Dmax", price: 1000, rating: 5, img:'https://sc01.alicdn.com/kf/H178593b25bcd481ca69ab938ef97fb96q/200919408/H178593b25bcd481ca69ab938ef97fb96q.jpg_.webp'},
            {id: 4, name: "Спойлер Dmax", price: 1000, rating: 5, img: 'https://sc04.alicdn.com/kf/HTB1TEcwXJfvK1RjSspfq6zzXFXaj.jpg'},
            
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setParts(parts) {
        this._parts = parts
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get parts() {
        return this._parts
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}
