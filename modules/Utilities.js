// get a random int between min and max, excluding end-points
export function getRandomInt(min, max) {
    return Math.floor(Math.random()*(max - min) + min); 
}