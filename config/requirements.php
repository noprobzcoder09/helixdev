<?php

return [
    'employee_docs' =>
    [
        'drivers_license',
        'white_card',
        'high_risk_work_license',
        'other_tickets',
        'union_ticket',
        'superannuation',
        'long_service_leave',
        'redundancy',
        'medical_declaration',
        'other_documents'
    ],
    'sub_contractor_docs' => [
        'public_liability',
        'workcover',
        'superannuation',
        'redundancy',
        'long_services',
        'compliance_statements',
        'other_documents'
    ],

    'modules_req' => [
        'observations',
        'safety_vids',
        'inspection',
        'inductions',
        'chemical_mgt',
        'incidents',
        'resources',
        'alerts',
        'emergency_info'
    ],

    'modules' => [
        ['name'  => 'Observations',  'key'   => 'observations'],
        ['name'  => 'Safety Videos', 'key'  => 'safety_vids'],
        ['key'   => 'inspection',    'name'  => 'Inspection'],
        ['key'   => 'inductions',    'name'  => 'Inductions'],
        ['key'   => 'chemical_mgt',  'name'  => 'Chemical Mgt'],
        ['key'   => 'incidents',     'name'  => 'Incidents'],
        ['key'   => 'resources',     'name'  => 'Resources'],
        ['key'   => 'alerts',        'name'  => 'Alerts'],
        ['key'   => 'emergency_info', 'name' => 'Emergency Info']
    ],

    /*
     * yes = 1, no = 0
     * compliant = 1, non-compliant = 0,
     * safe = 1, hazard = 0,
     * n/a = 2
     */
    'inspection_options' => [
        array('id' => 'yes_no', 'title' => 'Yes / No', 'buttons' => ['Yes', 'No']),
        array('id' => 'compliant_non_compliant', 'title' => 'Compliant / Non-Compliant', 'buttons' => ['Compliant', 'Non-Compliant']),
        array('id' => 'safe_hazard', 'title' => 'Safe / Hazard', 'buttons' => ['Safe', 'Hazard']),
      //  array('id' => 'not_applicable', 'title' => 'NA'),
    ],

    'inspection_options_key' => [
        array(
          'yes_no' => 'Yes / No',
          'compliant_non_compliant' => 'Compliant / Non-Compliant',
          'safe_hazard' => 'Safe / Hazard'
        )
    ],
    'inspection_option_keys' => [
        'yes_no' => 'Yes / No',
        'compliant_non_compliant' => 'Compliant / Non-Compliant',
        'safe_hazard' => 'Safe / Hazard'
    ],
    'inspection_options_key_buttons' =>
    array(
        'yes_no' => ['Yes', 'No'],
        'compliant_non_compliant' => ['Compliant', 'Non-Compliant'],
        'safe_hazard' => ['Safe', 'Hazard']
    ),

    /* inspection status */
    'inspection_status' => [
        1 => ['name' => 'Open', 'class' => 'fc-green'],
        2 => ['name' => 'Closed Out', 'class' => 'fc-green'],
        3 => ['name' => 'Overdue', 'class' => 'fc-red'],
        4 => ['name' => 'In Progress', 'class' => 'fc-orange']
    ],

    'notification_link' =>
    array(
      'state' => '',
      'type' => '',
      'id' => '',
      'item_id' => ''
    ),

    /* observation categories */
    'observation_categories' => '{"categories":{"safety":{"name":"Safety","types":{"hazard":{"value":0},"positive":{"value":1}},"categories":{"ppe":{"name":"PPE","category":"safety"},"traffic":{"name":"Traffic","category":"safety"},"chemical":{"name":"Chemical","category":"safety"},"lifting":{"name":"Lifting","category":"safety"},"risk_assessment":{"name":"Risk Assessment","category":"safety"},"competency":{"name":"Competency","category":"safety"},"house_keeping":{"name":"House Keeping","category":"safety"},"plant":{"name":"Plant","category":"safety"},"ptw":{"name":"PTW","category":"safety"},"excavation":{"name":"Excavation","category":"safety"},"exclusion_signage":{"name":"Exclusion / Signage","category":"safety"},"other":{"name":"Other","category":"safety"}}},"environment":{"name":"Environment","types":{"hazard":{"value":0},"positive":{"value":1}},"categories":{"spill":{"name":"Spill","category":"environment"},"fauna":{"name":"Fauna","category":"environment"},"flora":{"name":"flora","category":"environment"},"land_owner":{"name":"Land Owner","category":"environment"},"noise":{"name":"Noise","category":"environment"},"dust":{"name":"Dust","category":"environment"},"cultural_heritage":{"name":"House Keeping","category":"Cultural Heritage"},"weed_seed":{"name":"Weed / Seed","category":"environment"},"pollution":{"name":"Pollution","category":"environmen"},"waste_disposal":{"name":"Waste Disposal","category":"environment"},"sediment_control":{"name":"Sediment Control","category":"environment"},"other":{"name":"Other","category":"environment"}}},"quality":{"name":"Quality","types":{"defect":{"value":0},"positive":{"value":1}},"categories":{"mechanical":{"name":"Mechanical","category":"environment"},"product":{"name":"Product","category":"environment"},"workmanship":{"name":"Workmanship","category":"environment"},"procedure":{"name":"Procedure","category":"environment"},"house_keeping":{"name":"House Keeping","category":"environment"},"other":{"name":"Other","category":"environment"}}},"public":{"name":"Public","types":{"hazard":{"value":0},"positive":{"value":1}},"categories":{"security":{"name":"Security","category":"public"},"unauthorized_entry":{"name":"Unauthorized Entry","category":"public"},"feedback_complaint":{"name":"Feedback / Compliant","category":"public"},"access":{"name":"Access","category":"public"},"traffic_control":{"name":"Traffic Control","category":"public"},"third_parties":{"name":"3rd Parties","category":"public"},"other":{"name":"other","category":"public"}}}}}',

    /* observation status */
    'observation_status' => [
      1 => ['name' => 'OPEN', 'class' => 'fc-green'],
      2 => ['name' => 'CLOSED OUT', 'class' => 'fc-green'],
      3 => ['name' => 'OVERDUE', 'class' => 'fc-red'],
      4 => ['name' => 'IN PROGRESS', 'class' => 'fc-orange']
    ],

    'observation_type' => [
        0 => ['name' => 'NEGATIVE', 'class' => 'fc-red'],
        1 => ['name' => 'SAFE', 'class' => 'fc-green']
    ],
    'emergency_groups' => [
        1 => ['id' => 1, 'name' => 'Emergency Response Coordinators'],
        2 => ['id' => 2, 'name' => 'Environmental Response Coordinators'],
        3 => ['id' => 3, 'name' => 'First Aiders']
    ],
    'greenhat_status' => [
      1 => 'open',
      2 => 'closed out',
      3 => 'overdue',
      4 => 'in progress'
    ],

    'dropdown' => [
        'supervisors' => [
            0 => [
                'name' => 'John Doe',
                'id' => 1
            ],
            1 => [
                'name' => 'James Smith',
                'id' => 2
            ],
            2 => [
                'name' => 'Foo Bar',
                'id' => 3
            ],
            3 => [
                'name' => 'Helix Supervisor',
                'id' => 4
            ],
            4 => [
                'name' => 'Admin Admin',
                'id' => 5
            ]
        ],
        'hr' => [
            0 => [
                'name' => 'HR One',
                'id' => 1
            ],
            1 => [
                'name' => 'HR Two',
                'id' => 2
            ],
            2 => [
                'name' => 'HR Three',
                'id' => 3
            ],
            3 => [
                'name' => 'HR Four',
                'id' => 4
            ],
            4 => [
                'name' => 'HR Five',
                'id' => 5
            ]
        ],
        'const' => [
            0 => [
                'name' => 'Const Management One',
                'id' => 1
            ],
            1 => [
                'name' => 'Const Management Two',
                'id' => 2
            ],
            2 => [
                'name' => 'Const Management Three',
                'id' => 3
            ],
            3 => [
                'name' => 'Const Management Four',
                'id' => 4
            ],
            4 => [
                'name' => 'Const Management Five',
                'id' => 5
            ]
        ],
        'plant' => [
            0 => [
                'name' => 'Plant Dept One',
                'id' => 1
            ],
            1 => [
                'name' => 'Plant Dept Two',
                'id' => 2
            ],
            2 => [
                'name' => 'Plant Dept Three',
                'id' => 3
            ],
            3 => [
                'name' => 'Plant Dept Four',
                'id' => 4
            ],
            4 => [
                'name' => 'Plant Dept Five',
                'id' => 5
            ]
        ],
        'ohs' => [
            0 => [
                'name' => 'OHS One',
                'id' => 1
            ],
            1 => [
                'name' => 'OHS Two',
                'id' => 2
            ],
            2 => [
                'name' => 'OHS Three',
                'id' => 3
            ],
            3 => [
                'name' => 'OHS Four',
                'id' => 4
            ],
            4 => [
                'name' => 'OHS Five',
                'id' => 5
            ]
        ],

        'environmental' => [
            0 => [
                'name' => 'Environmental One',
                'id' => 1
            ],
            1 => [
                'name' => 'Environmental Two',
                'id' => 2
            ],
            2 => [
                'name' => 'Environmental Three',
                'id' => 3
            ],
            3 => [
                'name' => 'Environmental Four',
                'id' => 4
            ],
            4 => [
                'name' => 'Environmental Five',
                'id' => 5
            ]
        ]
    ],
    // please don't delete
    /*
    'greenhat_alert_links' => [
        'direct_sup' =>  '/helix/dev/admin#/hr/workforce/direct-supervisor',
        'hr_followup' => '/helix/dev/admin#/hr/workforce/hr-followup',
        'const_mgmt_followup' => '/helix/dev/admin#/hr/workforce/construction-management',
        'plant_dept_followup' => '/helix/dev/admin#/hr/workforce/plant-department',
        'ohs_followup' => '/helix/dev/admin#/hr/workforce/ohs-followup',
        'environmental_followup' => '/helix/dev/admin#/hr/workforce/environmental-followup',
        'employee_link' => '/helix/dev/admin/#/hr/workforce/greenhat-kickoff'
    ],
    */


    'greenhat_alert_links' => [
        'direct_sup' =>  '#/greenhat/direct-supervisor',
        'hr_followup' => '#/greenhat/hr-followup',
        'const_mgmt_followup' => '#/greenhat/construction-management',
        'plant_dept_followup' => '#/greenhat/plant-manager',
        'ohs_followup' => '#/greenhat/ohs-followup',
        'environmental_followup' => '#/greenhat/environmental-followup',
        'employee_link' => '#/greenhat/employee/kickoff',
        'worker' => '#/greenhat/worker/kickoff'
    ],

    'alert_links' => [
        'observation' => ['observation_id' => false]
    ],

    /* resources */
    'resource_categories' => [
        'company_policies' => [
            'id'	=> 1,
            'name' 	=> 'Company Policies'
        ],
        'useful_links' => [
            'id'	=> 2,
            'name' 	=> 'Useful Links'
        ],
        'forms' => [
            'id'	=> 3,
            'name' 	=> 'Forms',
            'canAttachFile' => true
        ],
        'plans_specifications' => [
            'id'	=> 4,
            'name' 	=> 'Plans & Specifications',
            'canAttachFile' => true
        ],
    ],

    /* months */
    'months' => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
];
