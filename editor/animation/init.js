requirejs(['ext_editor_io2', 'jquery_190', 'raphael_210'],
    function (extIO, $) {
        function peaceble_queens_visualization(tgt_node, data) {

            if (!data || !data.ext) {
                return
            }

            const input = data.in[0]

            /*----------------------------------------------*
             *
             * attr
             *
             *----------------------------------------------*/
            const attr = {
                board: [
                    // white
                    {
                        'stroke-width': '0.1',
                        'fill': '#FFFFFF'
                    },
                    // black
                    {
                        'stroke-width': '0.1',
                        'fill': '#D3D3D3'
                    }
                ],
                queen: [
                    // white
                    {
                        'stroke-width': '0.7',
                        'fill': '#FFFFFF'
                    },
                    // black
                    {
                        'stroke-width': '0',
                        'fill': '#000000'
                    }
                ]
            }

            /*----------------------------------------------*
             *
             * value
             *
             *----------------------------------------------*/
            const grid_seize_px = 200
            const os = 20
            const unit = grid_seize_px / input

            /*----------------------------------------------*
             *
             * paper
             *
             *----------------------------------------------*/
            const paper = Raphael(tgt_node, grid_seize_px+os*2, grid_seize_px+os*2)

            /*----------------------------------------------*
             *
             * draw board
             *
             *----------------------------------------------*/
            paper.rect(os, os, 200, 200)
            for (let i = 0; i < input; i += 1) {
                for (let j = 0; j < input; j += 1) {
                    paper.rect(os+(unit*i), os+(unit*j), unit, unit).attr(
                        attr.board[(j % 2) ? (i % 2) : 1 - (i % 2)])
                }
            }

            /*----------------------------------------------*
             *
             * (func) draw_queens
             *
             *----------------------------------------------*/
            let queens_objects = []
            const queen_path =
                      'M376.168,751.184c23.412-16.708-7.428-62.754-17.531-76.461c-21.072-28.577-47.021'
                    + '-41.438-47.021-54.336 c0-12.898,14.186-14.186,14.186-14.186V582.98c0,0-3.87,0'
                    + '-10.316,0c-35.419-24.236-39.8-206.396-40.28-268.907h15.192 c18.071,0,27.107'
                    + '-3.977,27.107-19.87c0-14.665-38.368-25.941-44.371-43.182h8.289c8.426,0,15.268'
                    + '-6.842,15.268-15.275 c0-8.152-6.415-14.788-14.46-15.207c1.729-31.625,20.997'
                    + '-71.151,37.225-94.068c13.561-19.19,8.487-29.689-5.104-30.657 c-18.795-1.356'
                    + '-18.941,11.694-37.865,11.694c-0.876,0-1.654-0.054-2.453-0.107c-3.154-31.038'
                    + '-25.591-56.378-55.136-63.848 c4.091-4.419,6.621-10.315,6.621-16.814C225.517,'
                    + '13.085,214.432,2,200.772,2c-13.675,0-24.738,11.085-24.738,24.742 c0,6.506,2.514,'
                    + '12.395,6.621,16.814c-29.545,7.485-51.982,32.81-55.136,63.848c-0.8,0.053-1.592,0.107'
                    + '-2.453,0.107 c-18.933,0-19.085-13.051-37.872-11.694c-13.584,0.967-18.658,11.466'
                    + '-5.097,30.657c16.227,22.917,35.495,62.443,37.225,94.068 c-8.054,0.427-14.461,7.07'
                    + '-14.461,15.207c0,8.433,6.842,15.275,15.268,15.275h8.289c-6.004,17.241-44.371,28.517'
                    + '-44.371,43.182 c0,15.893,9.036,19.87,27.107,19.87h15.191c-0.48,62.51-4.868,244.671'
                    + '-40.279,268.907c-6.446,0-10.316,0-10.316,0v23.221 c0,0,14.186,1.288,14.186,'
                    + '14.186c0,12.898-25.949,25.759-47.022,54.336c-10.102,13.707-40.942,59.753-17.531,'
                    + '76.461 c0,0-30.093,15.047-23.411,36.783C4.967,797.688,15.35,798,32.065,798c16.708,0,'
                    + '160.478,0,160.478,0h16.463 c0,0,143.771,0,160.479,0c16.714,0,27.099-0.312,30.093'
                    + '-10.033C406.261,766.23,376.168,751.184,376.168,751.184z'
            const scale = .21 / input
            const dxy = [85, 35, 19, 11, 6, 2, 0, -2]
            function draw_queens(queens) {
                queens_objects = []
                queens.forEach((q, i) => {
                        for (let j = 0; j < q.length / 2; j += 1) {
                            const rk = q.charCodeAt([j*2]) - 'a'.charCodeAt(0)
                            const fi = input - parseInt(q[j*2+1], 10)
                            queens_objects.push(paper.path(queen_path).attr(attr.queen[i % 2])
                                                .transform(['s', scale])
                                                .translate([dxy[input - 1] - 167 + unit * rk,
                                                dxy[input - 1] - 366 + unit * fi].map(a=>a/scale)))
                        }
                })
            }

            /*----------------------------------------------*
             *
             * func : draw text
             *
             *----------------------------------------------*/
            let caption = null
            function draw_caption(num) {
                if (caption) {
                    caption.remove()
                }
                caption = paper.text(grid_seize_px/2 + os, grid_seize_px + os + os/2,
                'Click to display another one [' + num + '/ ' + queens.length + ']')
            }

            /*----------------------------------------------*
             *
             * draw queens ( initial )
             *
             *----------------------------------------------*/
            if (! data.ext.explanation) {
                return
            }
            const queens = data.ext.explanation
            draw_queens(queens[0])
            draw_caption(1)

            /*----------------------------------------------*
             *
             * on click event
             *
             *----------------------------------------------*/
            let data_idx = 0
            tgt_node.onclick = (() => {
                for (let i = 0; i < queens_objects.length; i += 1) {
                    queens_objects[i].remove()
                }
                data_idx = (queens.length - 1 > data_idx) ? data_idx + 1 : 0
                draw_queens(queens[data_idx])
                draw_caption(data_idx+1)
            })
        }

        var io = new extIO({
            animation: function($expl, data){
                peaceble_queens_visualization(
                    $expl[0],
                    data,
                );
            }
        });
        io.start();
    }
);
