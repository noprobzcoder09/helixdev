<?php

namespace App\Services;

use App\CorrectiveAction;
use App\Observation;
use App\Inspection;
use App\InspectionItem;

class ChartService
{
    public static function observations()
    {
        $colors = [[
            'backgroundColor'      => "red",
            'hoverBackgroundColor' => "red",
            'borderColor'          => "red",
            'hoverBorderColor'     => "red"
        ]];

        $labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        $months = config('requirements.months');

        foreach($months as $month)
        {
            $start_date = '2017-' . sprintf('%02s', $month) . '-01';
            $end_date = '2017-' . sprintf('%02s', $month + 1) . '-01';
            $q = Observation::where('created_at', '>=', $start_date);
            if($month != 12) {
                $q = $q->where('created_at', '<', $end_date);
            }

            $count = $q->get()->count();

            $data[] = $count;
        }

        $options = [
            "scales" =>
            [
                "xAxes" => [
                    array(
                        "gridLines" => array("display" => false)
                    )
                ],
                "yAxes" => [
                    array(
                        "scaleShowLabels" => false,
                        "ticks" => array("beginAtZero" => true),
                        "display" => true,
                        "gridLines" => array(
                            "display" => true,
                            "offsetGridLines" => false
                        )
                    )
                ]
            ]
        ];

        $dataset =  [
            [
                "label"                 => "My First dataset",
                "backgroundColor"       => "red",
                "borderColor"           => "red",
                "borderWidth"           => 2,
                "hoverBackgroundColor"  => "red",
                "hoverBorderColor"      => "rgba(255,99,132,1)",
                "data"                  => [65, 59, 20, 81, 56, 55, 40]
            ]
        ];
        $barGraph = compact('labels', 'data', 'options', 'colors', 'dataset');


        /* observation categories count */

        $safetyCount = Observation::where('category', 'safety')->count();
        $environmentCount = Observation::where('category', 'environment')->count();
        $qualityCount = Observation::where('category', 'quality')->count();
        $publicCount = Observation::where('category', 'public')->count();

        $circle1_colors = ["#868E90", "#157CC4"];
        $circle1_labels = [
            'SAFETY - ' . $safetyCount,
            'ENVIRONMENT - ' . $environmentCount,
            'QUALITY - ' . $qualityCount,
            'PUBLIC - ' . $publicCount
        ];

        $circle1_data = [$safetyCount, $environmentCount, $qualityCount, $publicCount];
        $circle1_options = array(
            'legend' => ['display' => true, 'position' => 'bottom']
        );

        $circle1_dataset = array('borderWidth' => 0);
        $circle1 = [
            'data' => $circle1_data,
            'colors' => $circle1_colors,
            'labels' => $circle1_labels,
            'options' => $circle1_options,
            'dataset' => $circle1_dataset
        ];

        $positiveCount = Observation::where('type', '>', 0)->count();
        $negativeCount = Observation::where('type', '<=', 0)->count();

        $circle2_colors = ["#319A39", "#CF2A27"];
        $circle2_labels = [
            'POSITIVE - ' . $positiveCount,
            'NEGATIVE - ' . $negativeCount
        ];

        $circle2_data = [$positiveCount, $negativeCount];
        $circle2_options = array(
            'legend' => ['display' => true, 'position' => 'bottom']
        );

        $circle2_dataset = array('borderWidth' => 0);

        $circle2 = [
            'data' => $circle2_data,
            'colors' => $circle2_colors,
            'labels' => $circle2_labels,
            'options' => $circle2_options,
            'dataset' => $circle2_dataset
        ];

        return [
            'bar_graph' => $barGraph,
            'circle1'   => $circle1,
            'circle2'   => $circle2
        ];
    }

    public static function inspections()
    {
        $colors = [[
            'backgroundColor'      => "#023C6F",
            'hoverBackgroundColor' => "#023C6F",
            'borderColor'          => "#023C6F",
            'hoverBorderColor'     => "#023C6F"
        ]];

        $labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        $months = config('requirements.months');

        foreach($months as $month)
        {
            $start_date = '2017-' . sprintf('%02s', $month) . '-01';
            $end_date = '2017-' . sprintf('%02s', $month + 1) . '-01';
            $q = Inspection::where('created_at', '>=', $start_date);

            if($month != 12)
            {
                $q = $q->where('created_at', '<', $end_date);
            }

            $count = $q->get()->count();
            $data[] = $count;
        }

        $options = [
            "scales" =>
            [
                "xAxes" => [
                    array(
                        "gridLines" => array("display" => false)
                    )
                ],
                "yAxes" => [
                    array(
                        "scaleShowLabels" => false,
                        "ticks" => array("beginAtZero" => true),
                        "display" => true,
                        "gridLines" => array(
                            "display" => true,
                            "offsetGridLines" => false
                        )
                    )
                ]
            ]
        ];

        $barGraph = compact('labels', 'data', 'options', 'colors');

        /* inspection item count for positive and negative (compliance or non comp) */

//        $positiveCount =  InspectionItem::where('answer', 1)->count();
//        $negativeCount = InspectionItem::where('answer', '>=', 2)->count();
        $positiveCount = 0;
        $negativeCount = 0;
        $inspections = Inspection::where('isClone', true)->where('inspected_by', '!=', NULL)->get();

        foreach($inspections as $i)
        {
            if($i->isAction()) {
                $positiveCount++;
            } else {
                $negativeCount++;
            }
        }

        $circle1_colors = ["#319A39", "#CF2A27"];
        $circle1_labels = [
            'YES - ' . $positiveCount,
            'NO - ' . $negativeCount,
          //  'ins' => $inspections
        ];

        $circle1_data = [$positiveCount, $negativeCount];
        $circle1_options = array(
            'legend' => ['display' => true, 'position' => 'bottom']
        );


        $circle1_dataset = array('borderWidth' => 0);
        $circle1 = [
            'data' => $circle1_data,
            'colors' => $circle1_colors,
            'labels' => $circle1_labels,
            'options' => $circle1_options,
            'dataset' => $circle1_dataset
        ];

        return [
            'bar_graph' => $barGraph,
            'circle1'   => $circle1
        ];
    }

    public static function onlineTraining()
    {
        $colors = [[
            'backgroundColor'      => "#023C6F",
            'hoverBackgroundColor' => "#023C6F",
            'borderColor'          => "#023C6F",
            'hoverBorderColor'     => "#023C6F"
        ]];

        $labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        $months = config('requirements.months');

        foreach($months as $month)
        {
            $start_date = '2017-' . sprintf('%02s', $month) . '-01';
            $end_date = '2017-' . sprintf('%02s', $month + 1) . '-01';
            $q = \App\OnlineTraining::where('created_at', '>=', $start_date);
            if($month != 12) {
                $q = $q->where('created_at', '<', $end_date);
            }

            $count = $q->get()->count();

            $data[] = $count;
        }

        $options = [
            "scales" =>
                [
                    "xAxes" => [
                        array(
                            "gridLines" => array("display" => false)
                        )
                    ],
                    "yAxes" => [
                        array(
                            "scaleShowLabels" => false,
                            "ticks" => array("beginAtZero" => true),
                            "display" => true,
                            "gridLines" => array(
                                "display" => true,
                                "offsetGridLines" => false
                            )
                        )
                    ]
                ]
        ];

        $barGraph = compact('labels', 'data', 'options', 'colors');

        return [
            'bar_graph' => $barGraph
        ];
    }

    public static function correctActions()
    {
        $colors = [[
            'backgroundColor'      => "#023C6F",
            'hoverBackgroundColor' => "#023C6F",
            'borderColor'          => "#023C6F",
            'hoverBorderColor'     => "#023C6F"
        ]];

        $labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        $months = config('requirements.months');

        foreach($months as $month)
        {
            $start_date = '2017-' . sprintf('%02s', $month) . '-01';
            $end_date = '2017-' . sprintf('%02s', $month + 1) . '-01';
            $q = CorrectiveAction::where('created_at', '>=', $start_date);
            if($month != 12) {
                $q = $q->where('created_at', '<', $end_date);
            }

            $count = $q->get()->count();

            $data[] = $count;
        }

        $options = [
            "scales" =>
                [
                    "xAxes" => [
                        array(
                            "gridLines" => array("display" => false)
                        )
                    ],
                    "yAxes" => [
                        array(
                            "scaleShowLabels" => false,
                            "ticks" => array("beginAtZero" => true),
                            "display" => true,
                            "gridLines" => array(
                                "display" => true,
                                "offsetGridLines" => false
                            )
                        )
                    ]
                ]
        ];

        $barGraph = compact('labels', 'data', 'options', 'colors');


        /* observation categories count */
        $correctives = CorrectiveAction::all();

        $count_open       = 0;
        $count_closedOut  = 0;
        $count_overdue    = 0;
        $count_inprogress = 0;

        //dd($correctives->toArray());
        foreach($correctives as $c)
        {
            switch($c->status['text'])
            {
                case 'OPEN':
                {
                    $count_open++;
                    }break;
                case 'CLOSED OUT':
                {
                    $count_closedOut++;
                    }break;
                case 'OVERDUE':
                {
                    $count_overdue++;
                    }break;
                case 'IN PROGRESS':
                {
                    $count_inprogress++;
                    }break;
            }
        }

        $circle1_colors = ["#e97472", "#f29b50", "#63c169", "#157cc4"];
        $circle1_labels = [
            'OVERDUE - ' . $count_overdue,
            'IN PROGRESS - ' . $count_inprogress,
            'OPEN - ' . $count_open,
            'CLOSED OUT - ' . $count_closedOut
        ];

        $circle1_data = [$count_overdue, $count_inprogress, $count_open, $count_closedOut];
        $circle1_options = array(
            'legend' => ['display' => true, 'position' => 'bottom']
        );

        $circle1_dataset = array('borderWidth' => 0);
        $circle1 = [
            'data' => $circle1_data,
            'colors' => $circle1_colors,
            'labels' => $circle1_labels,
            'options' => $circle1_options,
            'dataset' => $circle1_dataset
        ];

        return [
            'bar_graph' => $barGraph,
            'circle1'   => $circle1
        ];
    }
}
