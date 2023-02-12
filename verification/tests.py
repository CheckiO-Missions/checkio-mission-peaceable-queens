"""
TESTS is a dict with all of your tests.
Keys for this will be the categories' names.
Each test is a dict with
    "input" -- input data for a user function
    "answer" -- your right answer
    "explanation" -- not necessarily a key, it's used for an additional info in animation.
"""


TESTS = {
    "Basics": [
        {
            "input": [1],
            "answer": 0,
        },
        {
            "input": [2],
            "answer": 0,
        },
        {
            "input": [3],
            "answer": 1,
            "explanation": [['b1', 'c3']],
        },
        {
            "input": [4],
            "answer": 2,
            "explanation": [['d3b3', 'c1a1'], ['b4b3', 'c1a1'], ['a4b3', 'c1d2'], ['a2b3', 'd4c1'],
                            ['c2b3', 'd4a1'], ['d3d4', 'a2c1'], ['d3c1', 'a2b4'], ['d3c1', 'a2a4'],
                            ['d3d2', 'a1a4']]
        },
    ],
    "Extra": [
        {
            "input": [5],
            "answer": 4,
            "explanation": [['a3c5a5c3', 'e4d1e2b1'], ['d3a2b3a4', 'e5c1c5e1'], ['d3b3c4c2', 'e5a1a5e1']],
        },
        {
            "input": [6],
            "answer": 5,
            "explanation": [['f4c4e6f2c6', 'a5a3a1b1d1'], ['a4c4a6c6d5', 'e3e1b1f2b2'], ['a4d6c4c6d5', 'e3e1b1f2b2'],
                            ['d6c4a6c6d5', 'e3e1b1f2b2'], ['f4e3c4e6c6', 'a5a1b1b2d1'], ['e4f5c4e6c6', 'd2a3a1b2d1'],
                            ['e4f4c4e6c6', 'a5a3a1b2d1'], ['e4c4b5e6c6', 'd2a3a1f2d1'], ['a4c4a3a6c6', 'e5d2f5e1b1'],
                            ['a4c4a3a6c6', 'e5d2f5e1f2'], ['a4c4a3a6c6', 'e5d2f5b1f2'], ['a4c4a3a6c6', 'e5d2e1b1f2'],
                            ['a4c4a3a6c6', 'e5f5e1b1f2'], ['a4c4a3a6c6', 'd2f5e1b1f2'], ['c6c4a3a6b6', 'e5d2f5e1d1'],
                            ['c4a3b3a6c6', 'e5d2f5e1f2'], ['a4c4f3a6c6', 'e5d2e1b1b2'], ['c6f5b5c4b6', 'd2a3e1a1d1'],
                            ['f5b5c4f6c6', 'd2e3a3e1d1'], ['d6c4f4f3c6', 'a5e1a1b1b2'], ['a4a5d6b4d5', 'e3f1c1e2f2'],
                            ['a4a5b4b3d5', 'f6f1c1e2f2'], ['e5a5b4e6b6', 'f3f1c1c2d1'], ['e5a5b4e6a6', 'f3c1f2c2d1'],
                            ['e5a5d6b4e6', 'f3f1c1f2c2'], ['e5a5b4b5e6', 'f3c1f2c2d1'], ['a5b5b4e6a6', 'f3c1f2c2d1'],
                            ['e5b5b4e6a6', 'f3c1f2c2d1'], ['a4c1b4a3d1', 'e5f5e6f6f2'], ['a4c1b4a3b3', 'e5f5f6e2f2'],
                            ['a4c1b4a3b1', 'e5e6f6d5e2'], ['a4c1b4a3b1', 'e5e6f6e2f2'], ['a4a5c1b4b1', 'f3e6f6e2f2'],
                            ['a1a4a5b1b4', 'e3f3e6e2f2'], ['d6e2e6f2f3', 'a5a4a1c1b1']]
        },
        {
            "input": [7],
            "answer": 7,
            "explanation": [['d7g5c5d4g7c7d6', 'e2f3b3f1b1a2e1'], ['d7c7c5c6g5f4d6', 'e2b3a1b1a2b2e1'],
                            ['f5c7g5c5c6g6f4', 'e2b3d1a1a2b2e1'], ['f6c7g5c5c6g7f4', 'd3e2b3d1b1a2e1'],
                            ['f6a6c5a3f7a7c7', 'd1g4d2b1e4g2e1'], ['f6c5a3b6f7a7c7', 'e2d1g4d2e4g2e1'],
                            ['a5d7g5c5a7c7d6', 'e2f3b3f1b1e4b2'], ['d7g5c5c6c7d6g4', 'b3f1a1b1a2b2e1'],
                            ['d7g5c5a7g7c7d6', 'e2f3b3f1b1e4e1'], ['d7g5c5c6g6c7d6', 'e2b3f1a1a2b2e1'],
                            ['f6c5c6b6f7a7b7', 'd3e2g3d1g4d2e1'], ['c5c6b6a2a7b2b7', 'd3g3d1f4g4f1e1'],
                            ['a1a5c1b5b1c2b2', 'f3g3f7e6g4e7d6'], ['c4f5b5c6c2f4d5', 'a3a7g7a1g1e7e1'],
                            ['b4a5c1b5a3d1a4', 'f6g6f7g7e6f2g2'], ['b4d3b1b5a3d1a4', 'f6f7g7c7e6f2g2'],
                            ['b4a5c1b5b1d1a4', 'f6g3f7g7e6f2g2'], ['d3a5c1b5b1d1a4', 'f6f7g7e6e7f2g2'],
                            ['c4d2e2b5e4c2d5', 'f6a3g3a7g7a1g1']]
        },
    ]
}
