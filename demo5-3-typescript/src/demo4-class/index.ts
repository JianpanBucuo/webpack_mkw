let password = 'secret passcode'

class Employee2 {
    private _fullName: string
    get fullName() {
        return this._fullName
    }
    set fullName(newName) {
        if (password && password === 'secret passcode') {
            this._fullName = newName
        }
    }
}

class Grid {
    static origin = {
        x: 0,
        y: 0
    }
    scale: number
    constructor(scale: number) {
        this.scale = scale
    }
    calculateDistanceFromOrigin(point: { x: number, y: number }) {
        let xDist = point.x - Grid.origin.x
        let yDist = point.y - Grid.origin.y
        return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
    }
}