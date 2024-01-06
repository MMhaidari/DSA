const dir = [
    [-1, 0],
    [1, 0],
    [0,-1],
    [0, 1],
]

function walk(maze, wall, curr, end, seen, path) {
    // 1. off the map
    if (curr.x < 0 || curr.x >= maze[0].length ||
        curr.y < 0 || curr.y >= maze.length ) {
            return false;
    }
    //  on the wall 
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    if (curr.x === end.x && curr.y === end.y) {
        path.push(end)
        return true;
    }

    if (seen[curr.y][curr.x]) {
        return false
    }

    // 3 recurse
    // pre
    seen[curr.y][curr.x] = true
    path.push(curr)

    // recurse
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i]
        if (walk(maze, wall, {
            x: curr.x + x,
            y: curr.y + y
        }, end, seen, path)) {
            return true;
        }
    }

    // post
    path.pop()
    return false;
}

function mazeSolver(maze, wall, start, end) {
    const seen = [];
    const path = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path; // Add this line to return the path array
}

const maze = [
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 1, 1],
    [0, 0, 0, 0, 0],
];

const start = { x: 0, y: 0 };
const end = { x: 4, y: 4 };
const wall = 1;

const solutionPath = mazeSolver(maze, wall, start, end);
console.log(solutionPath);
