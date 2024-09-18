"use strict";
var def = 
{
  artefact_1: 
  {
    datadefault: [

      //EXAMEN 1
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: "QA",
        parent: "#ejemplo1",
        contents: {
          artifact_1: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                {
                  type: 0,
                  text: ["Dominio", null],
                  conditions: {
                    correctIndex: null
                  },
                },
                {
                  type: 0,
                  text: ["Rango", null],
                  conditions: {
                    correctIndex: null
                  },
                },
                {
                  type: 0,
                  text: ["Corte con eje X", null],
                  conditions: {
                    correctIndex: null
                  },
                },
                {
                  type: 0,
                  text: ["Corte con eje Y", null],
                  conditions: {
                    correctIndex: null
                  },
                },
              ],
              [
                {
                  type: 2,
                  answers_values: [
                    "",
                    "(-3,∞)",
                    "R-{0,4}",
                    "(-∞,0)∪(0,4)∪(4,∞)",
                    "(-∞,∞)"
                  ],
                  conditions: {
                    valueInputs: ["(-∞,∞)"]
                  }
                },
                {
                  type: 2,
                  answers_values: [
                    "",
                    "(-∞,4)",
                    "(-∞,∞)",
                    "(-∞,1.8)∪(3,∞)",
                    "R-{0,1.8,3}"
                  ],
                  conditions: {
                    valueInputs: ["(-∞,∞)"]
                  }
                },
                {
                  type: 3,
                  inputsDefault: [["", false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [0, 1, 3]
                  }
                },
                {
                  type: 3,
                  inputsDefault: [["", false]],
                  conditions: {
                    valueInputs: [0]
                  }
                }
              ],
              [
                {
                  type: 0,
                  text: ["Parte Positiva", null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ["Parte Negativa", null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ["Parte Creciente", null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ["Parte Decreciente", null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],
              [
                {
                  type: 2,
                  answers_values: [
                    "",
                    "(-∞,0)∪(1,3)∪[4,∞)",
                    "(-∞,0]∪[1,3]∪[4,∞)",
                    "(-3,0)∪(1,3)∪[4,∞)",
                    "(-3,0]∪[1,3]∪[4,∞)"
                  ],
                  conditions: {
                    valueInputs: ["(-∞,0)∪(1,3)∪[4,∞)"]
                  }
                },
                {
                  type: 2,
                  answers_values: [
                    "",
                    "(0,1]∪[3,4)",
                    "[0,1]∪[3,4]",
                    "(0,1)∪(3,4)",
                    "[0,1)∪(3,4]"
                  ],
                  conditions: {
                    valueInputs: ["(0,1)∪(3,4)"]
                  }
                },
                {
                  type: 2,
                  answers_values: [
                    "",
                    "(0,2]∪(4,5)",
                    "[0,2]∪[4,5]",
                    "(0,2]∪[4,5]",
                    "(0,2)∪(4,5)"
                  ],
                  conditions: {
                    valueInputs: ["(0,2)∪(4,5)"]
                  }
                },
                {
                  type: 2,
                  answers_values: [
                    "",
                    "(-3,0]∪(2,4)∪[5,∞)",
                    "(-∞,0]∪(2,4)∪[5,∞)",
                    "(-∞,0)∪(2,4)∪(5,∞)",
                    "(-3,0)∪(2,4)∪(5,∞)"
                  ],
                  conditions: {
                    valueInputs: ["(-∞,0)∪(2,4)∪(5,∞)"]
                  },
                },
              ],
            ],
          },
        },
      },
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo2',
        contents: {
          artifact_2: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                //Terceras caracteristicas, Examen 1
                {
                  type: 0,
                  text: ['Max.Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Max. No Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],
              //Validacion terceras caracteristicas, Examen 1
              [
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [1.8,4]
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [2,5]
                  }
                }
              ],
              [
                //Cuartas caracteristicas, Examen 1
                {
                  type: 0,
                  text: ['Min.Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Min. No Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],
              //Validacion cuartas caracteristicas
              [
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [0,3]
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [0,4]
                  },
                },
              ],
            ],
          },
        },
      },
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo3',
        contents: {
          artifact_3: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [              
                {
                  type: 0,
                  text: ['Intervalo',null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(0,∞)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(-∞,-1)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(0,4)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],
              [
                {
                  //Validacion primeras caracteristicas
                  type: 0,
                  text: ['Cota Sup.', null],
                  conditions: {
                    correctIndex: null
                  }
                }, 
                {
                  type: 3,
                  inputsDefault:[["4",false]],
                  conditions: {
                    valueInputs: ['\\geq4','4'],
                    evaluateCote:{
                      top: 4
                    }
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault:[["1.8",false]],
                  conditions: {
                    valueInputs: ['\\geq1.8','1,8'],
                    evaluateCote:{
                      top: 1.8
                    }
                  }
                },
              ],
              [
                {
                  type: 0,
                  text: ['Intervalo', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(0,∞)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(-2,0)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['R', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],
              [
                {
                  type: 0,
                    text: ['Cota Inf.', null],
                    conditions: {
                      correctIndex: null
                    }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                },
                {
                  type: 3,
                  inputsDefault:[["0",false]],
                  conditions: {
                    valueInputs: ['\\leq0','0'],
                    evaluateCote:{
                      bottom: 0
                    }
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                },
              ],
            ]
          }
        }
      },
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo4',
        contents: {
          artifact_4: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [                
                {
                  type: 0,
                  text: ['f(-1)≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f(0.5)≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f(4)≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f( )≈-1', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f( )≈1.8', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],              
              [
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [0.2]
                  }
                },
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [-1.8]
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [3]
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [0.7,3.3]
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [2,-2.2]
                  }
                }
              ],
            ]
          }
        }
      },

      //EXAMEN 2
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo1',
        contents: {
          artifact_5: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                //Primeras caracteristicas, Examen 2
                {
                  type: 0,
                  text: ['Dominio',null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Rango', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Corte con eje X', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Corte con eje Y', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],
              [
                {
                  //Validacion primeras caracteristicas, Examen 2
                  type: 2,
                  answers_values:["","(-∞,-1)∪(0,3.5)∪(3.5,∞)","(-∞,∞)","(-∞,-1]∪(0,∞)","(-∞,-1)∪(0,∞)"],
                  conditions: {
                    valueInputs:["(-∞,-1]∪(0,∞)"]
                  }
                }, 
                {
                  type: 2,
                  answers_values:["","(-∞,-0.5)∪(0,∞)","(-∞,0)∪(1,∞)","(-∞,-0.5)∪(0,3]","(-∞,-0.5)∪(1,∞)"],
                  conditions: {
                    valueInputs: ['(-∞,-0.5)∪(0,∞)']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                },
              ],
              //Segundas caracteristicas, Examen 2
              [
                {
                  type: 0,
                  text: ['Parte Positiva', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Negativa', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Creciente', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Decreciente', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],
              //Validacion segundas caracteristicas, Examen 2
              [
                {
                  type: 2,       
                  answers_values:["","(-∞,-1)∪(3.5,∞)","(-∞,-1]∪[3,∞)","(-∞,-1)∪(3,∞)","(-∞,-1]∪[3.5,∞)"],
                  conditions: {
                    valueInputs: ["(-∞,-1]∪[3.5,∞)"]
                  }
                }, 
                {
                  type: 2,
                  answers_values:["","(0,3.5]","(0,3.5)","(-1,3.5]","[-1,3.5)"],
                  conditions: {
                    valueInputs: ["(0,3.5)"]
                  }
                }, 
                {
                  type: 2,
                  answers_values:["","(-∞,-2)∪(0,∞)","(-∞,-2]∪(0,∞)","(-∞,-2)∪(0,3.5)∪(3.5,∞)","(0,3.5)∪(3.5,∞)"],
                  conditions: {
                    valueInputs: ["(-∞,-2)∪(0,3.5)∪(3.5,∞)"]
                  }
                }, 
                {
                  type: 2,
                  answers_values:["","[-2,-1]","(-2,-1)","(-2,-1]","[-2,-1)"],
                  conditions: {
                    valueInputs: ["(-2,-1)"]
                  },
                },
              ],
            ],
          },
        },
      },
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo2',
        contents: {
          artifact_6: {
              allinputs: [],
              header: [],
              dataInteraction: {
                incorrect: 0,
                correct: 0,
                forAnswer: 0
              },
              cells: [
                [
                  //Terceras caracteristicas, Examen 2
                  {
                    type: 0,
                    text: ['Max.Abs', null],
                    conditions: {
                      correctIndex: null
                    }
                  },
                  {
                    type: 0,
                    text: ['Alcanzado en', null],
                    conditions: {
                      correctIndex: null
                    }
                  },
                  {
                    type: 0,
                    text: ['Max. No Abs', null],
                    conditions: {
                      correctIndex: null
                    }
                  },
                  {
                    type: 0,
                    text: ['Alcanzado en', null],
                    conditions: {
                      correctIndex: null
                    }
                  },
                ],
                //Validacion terceras caracteristicas, Examen 2
              [
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [3]
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [-2]
                  }
                }
              ],
              [
                //Cuartas caracteristicas, Examen 2
                {
                  type: 0,
                  text: ['Min.Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Min. No Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],
              //Validacion cuartas caracteristicas Examen 2
              [
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [1,1.5]
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [-1,3.5]
                  },
                },
              ],
            ],
          },
        },
      },
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo3',
        contents: {
          artifact_7: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                //Primeras caracteristicas, Examen 2
                {
                  type: 0,
                  text: ['Intervalo',null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(0,∞)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(-∞,-1)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(0,4)', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],
              [
              {
                //Validacion primeras caracteristicas
                type: 0,
                text: ['Cota Sup.', null],
                conditions: {
                  correctIndex: null
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }, 
              {
                type: 3,
                inputsDefault:[["3",false]],
                conditions: {
                  valueInputs: ['\\geq3','3'],
                  evaluateCote:{
                    top: 3
                  }
                }
              },
              {
                type: 3,
                inputsDefault:[["1.5",false]],
                conditions: {
                  valueInputs: ['\\geq1.5','1.5'],
                  evaluateCote:{
                    top: 1.5
                  }
                }
              }, ],

              //Segundas caracteristicas, Examen 2
              [

                {
                  type: 0,
                  text: ['Intervalo', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(0,∞)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(-2,0)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['R', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],
              //Validacion segundas caracteristicas, Examen 2
              [
                {
                  type: 0,
                    text: ['Cota Inf.', null],
                    conditions: {
                      correctIndex: null
                    }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                },
                {
                  type: 3,
                  inputsDefault:[["1",false]],
                  conditions: {
                    valueInputs: ['\\leq1','1'],
                    evaluateCote:{
                      bottom: 1
                    }
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                },
              ],
            ]
          }
        }
      },
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo4',
        contents: {
          artifact_8: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                //Terceras caracteristicas, Examen 2
                {
                  type: 0,
                  text: ['f(-2)≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f(0.5)≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f(3.5)≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f( )≈-0.5', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f( )≈1', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],
              //Validacion terceras caracteristicas, Examen 2
              [
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [3]
                  }
                },
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [-2]
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [1.5]
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [-1,-3]
                  }
                }
              ],
            ]
          }
        }
      },

      //EXAMEN 3
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo1',
        contents: {
          artifact_9: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                //Primeras caracteristicas, Examen 3
                {
                  type: 0,
                  text: ['Dominio',null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Rango', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Corte con eje X', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Corte con eje Y', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],
              [
                {
                  //Validacion primeras caracteristicas Examen 3
                  type: 2,
                  answers_values:["","R-{3}","R-{-2,3}","(-∞,-2)∪(-2,2)∪(3,∞)","(-∞,2)∪(3,∞)"],
                  conditions: {
                    valueInputs:["(-∞,2)∪(3,∞)"]
                  }
                }, 
                {
                  type: 2,
                  answers_values:["","(-∞,1.3)∪(1.3,2.3)","(-∞,-3)∪(-3,2.3)","(-∞,-3)∪(-3,1.3)∪(1.3,2.3)","(-∞,2.3]"],
                  conditions: {
                    valueInputs: ['(-∞,2.3]']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [0,3.8]
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [0]
                  }
                }
              ],
              //Segundas caracteristicas, Examen 3
              [
                {
                  type: 0,
                  text: ['Parte Positiva', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Negativa', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Creciente', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Decreciente', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],
              //Validacion segundas caracteristicas, Examen 3
              [
                {
                  type: 2,       
                  answers_values:["","(-2,0)∪(3.8,∞)","[-2,0)∪(3.8,∞)","(-2,0)∪[3.8,∞)","[-2,0)∪[3.8,∞)"],
                  conditions: {
                    valueInputs: ["[-2,0)∪(3.8,∞)"]
                  }
                }, 
                {
                  type: 2,
                  answers_values:["","(-∞,-2)∪(0,2)∪(3,3.8)","(-∞,-2)∪(0,2)∪(3,∞)","(-∞,-2)∪[0,2)∪(3,3.8]","(-∞,-2)∪[0,2)∪(3,∞)"],
                  conditions: {
                    valueInputs: ["(-∞,-2)∪(0,2)∪(3,3.8)"]
                  }
                }, 
                {
                  type: 2,
                  answers_values:["","(-∞,-2.5]∪(3,∞)","(-∞,-2.5)∪(3,∞)","(-∞,-2.5)∪(2,∞)","(-∞,-2.5]∪(2,∞)"],
                  conditions: {
                    valueInputs: ["(-∞,-2.5)∪(3,∞)"]
                  }
                }, 
                {
                  type: 2,
                  answers_values:["","(-2.5,-2)∪(-2,2)","(-2.5,-2)∪(-2,3)","(-2.5,3)","(-2.5,2)"],
                  conditions: {
                    valueInputs: ["(-2.5,-2)∪(-2,2)"]
                  },
                },
              ],
            ],
          },
        },
      },
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo2',
        contents: {
          artifact_10: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                //Terceras caracteristicas, Examen 3
                {
                  type: 0,
                  text: ['Max.Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Max. No Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],
              //Validacion terceras caracteristicas, Examen 3
              [
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [2.3]
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [-2]
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [-1]
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [-2.5]
                  }
                }
              ],
              [
                //Cuartas caracteristicas, Examen 3
                {
                  type: 0,
                  text: ['Min.Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Min. No Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],
              //Validacion cuartas caracteristicas examen 3
              [
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  },
                },
              ],
            ],
          },
        },
      },
      {
        customKeyboard: 7,

        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo3',
        contents: {
          artifact_11: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                //Primeras caracteristicas, Examen 3
                {
                  type: 0,
                  text: ['Intervalo',null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(-∞,0)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(-∞,-1)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(3,6)', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],
              [
              {
                //Validacion primeras caracteristicas Examen 3
                type: 0,
                text: ['Cota Sup.', null],
                conditions: {
                  correctIndex: null
                }
              }, 
              {
                type: 3,
                inputsDefault:[["2.3",false]],
                conditions: {
                  valueInputs: ['\\geq2.3','2.3'],
                  evaluateCote:{
                    top: 2.3
                  }
                }
              }, 
              {
                //La misma que la anterior, cierto?
                type: 3,
                inputsDefault:[["2.3",false]],
                conditions: {
                  valueInputs: ['\\geq2.3','2.3'],
                  evaluateCote:{
                    top: 2.3
                  }
                }
              }, 
              {
                type: 3,
                inputsDefault:[["1.3",false]],
                conditions: {
                  valueInputs: ['\\geq1.3','1,3'],
                  evaluateCote:{
                    top: 1.3
                  }
                }
              }, ],

              //Segundas caracteristicas, Examen 1
              [

                {
                  type: 0,
                  text: ['Intervalo', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(0,∞)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(-3,0)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['R', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],

              //Validacion segundas caracteristicas, Examen 3
              [
              {
                type: 0,
                  text: ['Cota Inf.', null],
                  conditions: {
                    correctIndex: null
                  }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              },
              {
                //Confirmar con el profe.
                type: 3,
                inputsDefault:[["-3",false]],
                conditions: {
                  valueInputs: ['\\leq-3','-3'],
                  evaluateCote:{
                    bottom: -3
                  }
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              } ,],
            ]
          }
        }
      },
      {
        customKeyboard: 7,

        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo4',
        contents: {
          artifact_12: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                //Terceras caracteristicas, Examen 3
                {
                  type: 0,
                  text: ['f(-2)≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f(-2.5)≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f( )≈0', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f( )≈0.5', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f( )≈-3', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],


              //Validacion terceras caracteristicas, Examen 3
              [{
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [2.3]
                }
              },
              {
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [-1]
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [0,3.8]
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [-1.3,3.7]
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [-3.2,1.8,3.4]
                }
              }],
            ]
          }
        }
      },

      //EXAMEN 4
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo1',
        contents: {
          artifact_13: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                //Primeras caracteristicas, Examen 4
                {
                  type: 0,
                  text: ['Dominio',null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Rango', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Corte con eje X', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Corte con eje Y', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],
              [
                {
                  //Validacion primeras caracteristicas Examen 4
                  type: 2,
                  answers_values:["","(-∞,-2)∪(-2,1)∪(2,∞)","(-∞,-2)∪(-2,1)∪[2,∞)","(-∞,1)∪[2,∞)","(-∞,1)∪(2,∞)"],
                  conditions: {
                    valueInputs:["(-∞,1)∪[2,∞)"]
                  }
                }, 
                {
                  type: 2,
                  answers_values:["","[-3.3,∞)","(-∞,∞)","(-∞,-3)∪(-2,∞)","(-3.3,-3)∪(-2,∞)"],
                  conditions: {
                    valueInputs: ['[-3.3,∞)']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [0,2.5,3.5]
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [0]
                  }
                }
              ],
              //Segundas caracteristicas, Examen 4
              [
                {
                  type: 0,
                  text: ['Parte Positiva', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Negativa', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Creciente', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Decreciente', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],
              //Validacion segundas caracteristicas, Examen 4
              [
                {
                  type: 2,       
                  answers_values:["","(0,2)∪(2.5,3.5)","(0,1)∪(2.5,3.5)","[0,1)∪[2.5,3.5]","[0,2)∪[2.5,3.5]"],
                  conditions: {
                    valueInputs: ["(0,1)∪(2.5,3.5)"]
                  }
                }, 
                {
                  type: 2,
                  answers_values:["","(-2,0)∪(2,2.5)∪(3.5,∞)","[-2,0]∪[2,2.5]∪[3.5,∞)","(-∞,0]∪[2,2.5]∪[3.5,∞)","(-∞,0)∪(2,2.5)∪(3.5,∞)"],
                  conditions: {
                    valueInputs: ["(-∞,0)∪(2,2.5)∪(3.5,∞)"]
                  }
                }, 
                {
                  type: 2,
                  answers_values:["","(-2,1)∪(2,3)∪(4.7,∞)","(-∞,-2)∪(-2,1)∪(2,3)","(-∞,1)∪(2,3)∪(4.7,∞)","(-2,1)∪(2,3)"],
                  conditions: {
                    valueInputs: ["(-2,1)∪(2,3)∪(4.7,∞)"]
                  }
                }, 
                {
                  type: 2,
                  answers_values:["","(-∞,-2)∪[3,4.7]","(-∞,-2)∪(3,4.7)","[3,4.7]","(3,4.7)"],
                  conditions: {
                    valueInputs: ["(3,4.7)"]
                  },
                },
              ],
            ],
          },
        },
      },
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo2',
        contents: {
          artifact_14: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                //Terceras caracteristicas, Examen 4
                {
                  type: 0,
                  text: ['Max.Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Max. No Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],
              //Validacion terceras caracteristicas, Examen 4
              [
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: ['\\nexists']
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [1,-3]
                  }
                },
                {
                  type: 2,
                  answers_values:["","∄","(-∞,-2),3","(-∞,-2)","3"],
                  conditions: {
                    valueInputs: ["(-∞,-2),3"]
                  }
                }
              ],
              [
                //Cuartas caracteristicas, Examen 4
                {
                  type: 0,
                  text: ['Min.Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Min. No Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],
              //Validacion cuartas caracteristicas Examen 4
              [
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [-3.3]
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  conditions: {
                    valueInputs: [4.7]
                  }
                }, 
                {
                  type: 3,
                  inputsDefault: [['', false]],
                  oneToManyInput: true,
                  conditions: {
                    valueInputs: [-1,-2,-3]
                  }
                },
                {
                  type: 2,
                  answers_values:["","-2","2,-2","(-∞,-2),2,-2","(-∞,-2),-2"],
                  conditions: {
                    valueInputs: ["(-∞,-2),2,-2"]
                  },
                },
              ],
            ],
          },
        },
      },
      {
        customKeyboard: 7,

        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo3',
        contents: {
          artifact_15: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                //Primeras caracteristicas, Examen 4
                {
                  type: 0,
                  text: ['Intervalo',null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(0,∞)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(1,4)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(0,1)', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],
              [
              {
                //Validacion primeras caracteristicas Examen 4
                type: 0,
                text: ['Cota Sup.', null],
                conditions: {
                  correctIndex: null
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }, 
              {
                type: 3,
                inputsDefault:[["1",false]],
                conditions: {
                  valueInputs: ['\\geq1','1'],
                  evaluateCote:{
                    top: 1
                  }
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }, ],

              //Segundas caracteristicas, Examen 4
              [

                {
                  type: 0,
                  text: ['Intervalo', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(-∞,0)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(-3,1)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['R', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],

              //Validacion segundas caracteristicas, Examen 4
              [
              {
                type: 0,
                  text: ['Cota Inf.', null],
                  conditions: {
                    correctIndex: null
                  }
              }, 
              {
                type: 3,
                inputsDefault:[["-3",false]],
                conditions: {
                  valueInputs: ['\\leq-3','-3'],
                  evaluateCote:{
                    bottom: -3
                  }
                }
              }, 
              {
                type: 3,
                inputsDefault:[["-3",false]],
                conditions: {
                  valueInputs: ['\\leq-3','-3'],
                  evaluateCote:{
                    bottom: -3
                  }
                }
              },  
              {
                type: 3,
                inputsDefault:[["-3.3",false]],
                conditions: {
                  valueInputs: ['\\leq-3.3','-3.3'],
                  evaluateCote:{
                    bottom: -3.3
                  }
                }
              } ,],
            ]
          }
        }
      },
      {
        customKeyboard: 7,

        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo4',
        contents: {
          artifact_16: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                //Terceras caracteristicas, Examen 4
                {
                  type: 0,
                  text: ['f(-2)≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f(-2.5)≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f(3)≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f( )≈-0.5', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f( )≈-3.5', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],


              //Validacion terceras caracteristicas, Examen 4
              [{
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [-1]
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [-3]
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [1]
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [-0.4,2.3,3.7]
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              },],
            ]
          }
        }
      },

      //EXAMEN 5
      {
        customKeyboard: 7,

        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo1',
        contents: {
          artifact_17: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [

                {
                  type: 0,
                  text: ['Dominio', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  //text: ['Max.Abs', null],
                  text: ['Rango',null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Parte Creciente', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Decreciente', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],



              [
                {
                  type: 2,
                  answers_values: ['', '(-∞, ∞)', '(-∞, 0) ∪ (0, ∞)', '(-∞, 0) ∪ (0, 2.5) ∪ (2.5, ∞)'],
                  conditions: {
                    correctIndex: 1
                  }
                ,
              }, 
              {
                type: 2,
                answers_values: ['', '(-3, -1] ∪ [0, 2.5) ∪ (3, 3)', '(-3, -1] ∪ [0, 2.5) ∪ [3, 3]', '[-3, -1] ∪ (0, 3]', '(-3, -1] ∪ [0, 3]'],
                conditions: {
                  correctIndex: 2
                }
              ,
              },  
              {
                type: 2,
                answers_values: ['', '(-∞, -1) ∪ [0, 2.5)', '(-∞, -1) ∪ (0, 2.5)', '(-∞, -1] ∪ [0, 2.5)'],
                conditions: {
                  correctIndex: 2
                }
              ,
              },
              
              {
                type: 2,
                answers_values: ['', '(-1, 0) ∪ [2.5, ∞)', '(-1, 0) ∪ (2.5, ∞)', '(-1, 0)'],
                conditions: {
                  correctIndex: 3
                }
              ,
              },
              ],

              [

                {
                  type: 0,
                  text: ['Parte Negativa', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Parte Positiva', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Cortes X', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Cortes Y', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],

              [{
                type: 2,
                answers_values: ['', '(-∞, 0)', '(-∞, 0]', '(-∞, -1)'],
                conditions: {
                  correctIndex: 1
                }
              ,
              },
              {
                type: 2,
                answers_values: ['', '(0, ∞)', '[0, ∞)', '(0, 2.5) ∪ [3, ∞)'],
                conditions: {
                  correctIndex: 1
                }
              ,
              },
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [0]
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [0]
                }
              },],
            ]
          }
        }
      },
      {
        customKeyboard: 7,

        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo2',
        contents: {
          artifact_18: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                {
                  type: 0,
                  text: ['Max.Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Max. No Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],



              [
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [3]
                }
              },
              {
                type: 2,
                answers_values: ['', '(2.5, ∞)', '[2.5, ∞)', '[0, 0] ∪ (2.5, ∞)'],
                conditions: {
                  correctIndex: 2
                }
              ,
              },
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [-1]
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [-1]
                }
              }],

              [
                {
                  type: 0,
                  text: ['Min.Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Min. No Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],

              [{
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [0,  3]
                }
              }, 
              {
                type: 2,
                answers_values: ['', '[0, 0] ∪ [2.5, ∞)', '[0, ∞)', '[0, 2.5) ∪ (2.5, ∞)'],
                conditions: {
                  correctIndex: 1
                }
              ,
              },
            ]

            ]
          }
        }
      },
      {
        customKeyboard: 7,

        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo3',
        contents: {
          artifact_19: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [

                {
                  type: 0,
                  text: ['Intervalo', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  //text: ['Max.Abs', null],
                  text: ['(-∞, 0)',null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['(-1,1)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(0,∞)', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],



              [
                {
                  type: 0,
                  text: ['Cota Sup', null],
                  conditions: {
                    correctIndex: null
                  }
                ,
              }, 
              {
                type: 3,
                inputsDefault: [["-1", false]],
                conditions: {
                  valueInputs: ['\\geq-1', '-1'],
                  evaluateCote:{
                    top: -1,
                  }
                }
              ,
              },  
              {
                type: 3,
                inputsDefault: [["1", false]],
                conditions: {
                  valueInputs: ['\\geq1', '1'],
                  evaluateCote:{
                    top: 1,
                  }
                }
              ,
              },
              
              {
                type: 3,
                inputsDefault: [["3", false]],
                conditions: {
                  valueInputs: ['\\geq3', '3'],
                  evaluateCote:{
                    top: 3,
                  }
                }
              ,
              },
              ],

              [

                {
                  type: 0,
                  text: ['Intervalo', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['(2,4)', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['(0, ∞)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['R', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],

              [{
                type: 0,
                text: ['Cota Inf'],
                conditions: {
                  correctIndex: null
                }
              ,
              },
              {
                  type: 3,
                  inputsDefault: [["2", false]],
                  conditions: {
                    valueInputs: ['\\leq2', '2'],
                    evaluateCote:{
                      bottom: 2,
                    }
                  }
              ,
              },
              {
                type: 3,
                  inputsDefault: [["0", false]],
                  conditions: {
                    valueInputs: ['\\leq0', '0'],
                    evaluateCote:{
                      bottom: 0,
                    }
                  }
              }, {
                type: 3,
                  inputsDefault: [["-3", false]],
                  conditions: {
                    valueInputs: ['\\leq-3', '-3'],
                    evaluateCote:{
                      bottom: -3,
                    }
                  }
              },],
            ]
          }
        }
      },
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo4',
        contents: {
          artifact_20: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                {
                  type: 0,
                  text: ['f(2.5) ≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['f(-2) ≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f(0) ≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f( ) ≈ -2.8', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f( ) ≈ -1', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],



              [
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [3]
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [-2]
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [0]
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['-4', false]],
                onetoManyInputs: true,
                conditions: {
                  valueInputs: [-3.2, -3, -3.1, -3.5],
                }
              },
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [-1]
                }
              },]

            ]
          }
        }
      },

      //EXAMEN 6
      {
        customKeyboard: 7,

        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo1',
        contents: {
          artifact_21: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [

                {
                  type: 0,
                  text: ['Dominio', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  //text: ['Max.Abs', null],
                  text: ['Rango',null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Parte Creciente', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Decreciente', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],



              [
                {
                  type: 2,
                  answers_values: ['', '(-∞, ∞)', '(-∞, -1) ∪ (-1, ∞)', '(-∞, -1) ∪ (-1, 0.5) ∪ (0.5, ∞)'],
                  conditions: {
                    correctIndex: 1
                  }
                ,
              }, 
              {
                type: 2,
                answers_values: ['', '(-4, -1.5] ∪ [-1, 0.5) ∪ (1.5, 3]', '(-4, -1.5) ∪ [-1, 0.5) ∪ [1.5, 3]', '[-4, -1.5] U (-1, 3]', '(-4, -1.5) ∪ [-1, 0.5) ∪ (1, 3]'],
                conditions: {
                  correctIndex: 4 
                }
              ,
              },  
              {
                type: 2,
                answers_values: ['', '(-∞, 2)', '(-∞, -1) ∪ (-1, 0.5) ∪ (0.5, 2)', '(-∞, 2]'],
                conditions: {
                  correctIndex: 2
                }
              ,
              },
              
              {
                type: 2,
                answers_values: ['', '(2, ∞)', '[2, ∞)', '(0.5, ∞)'],
                conditions: {
                  correctIndex: 1
                }
              ,
              },
              ],

              [

                {
                  type: 0,
                  text: ['Parte Negativa', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Parte Positiva', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Cortes X', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Cortes Y', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],

              [{
                type: 2,
                answers_values: ['', '(-∞, 0)', '(-∞, 0]', '(-∞, -1) ∪ (-1, 0)'],
                conditions: {
                  correctIndex: 1
                }
              ,
              },
              {
                type: 2,
                answers_values: ['', '(0, ∞)', '[0, ∞)', '(0, 0.5) U (0.5, ∞)'],
                conditions: {
                  correctIndex: 1
                }
              ,
              },
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [0]
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [0]
                }
              },],
            ]
          }
        }
      },
      {
        customKeyboard: 7,

        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo2',
        contents: {
          artifact_22: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [

                {
                  type: 0,
                  text: ['Max.Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Max. No Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],


              [{
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [3]
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [2]
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }],

              [ {
                  type: 0,
                  text: ['Min.Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Min. No Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],

              [{
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [-1, 1.5]
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [-1, 0.5]
                }
              }],

            ]
          }
        }
      },
      {
        customKeyboard: 7,
        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo3',
        contents: {
          artifact_23: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [

                {
                  type: 0,
                  text: ['Intervalo', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  //text: ['Max.Abs', null],
                  text: ['(0, ∞)',null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['(-1,2)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(3,∞)', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],



              [
                {
                  type: 0,
                  text: ['Cota Sup', null],
                  conditions: {
                    correctIndex: null
                  }
                ,
              }, 
              {
                type: 3,
                  inputsDefault: [["3", false]],
                  conditions: {
                    valueInputs: ['\\geq3', '3'],
                    evaluateCote:{
                      top: 3,
                    }
                  }
              }, 
              {
                type: 3,
                  inputsDefault: [["3", false]],
                  conditions: {
                    valueInputs: ['\\geq3', '3'],
                    evaluateCote:{
                      top: 3,
                    }
                  }
              }, 
              
              {
                type: 3,
                  inputsDefault: [["1.5", false]],
                  conditions: {
                    valueInputs: ['\\geq3', '1.5'],
                    evaluateCote:{
                      top: 1.5,
                    }
                  }
              }, 
              ],

              [

                {
                  type: 0,
                  text: ['Intervalo', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['(-1, 0)', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['R', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(-∞,1)', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],

              [{
                type: 0,
                text: ['Cota Inf'],
                conditions: {
                  correctIndex: null
                }
              ,
              },
              {
                type: 3,
                  inputsDefault: [["-1", false]],
                  conditions: {
                    valueInputs: ['\\leq-1', '-1'],
                    evaluateCote:{
                      bottom: -1,
                    }
                  }
              },
              {
                type: 3,
                  inputsDefault: [["-4", false]],
                  conditions: {
                    valueInputs: ['\\leq-4', '-4'],
                    evaluateCote:{
                      bottom: -4,
                    }
                  }
              },
              {
                type: 3,
                  inputsDefault: [["-4", false]],
                  conditions: {
                    valueInputs: ['\\leq-4', '-4'],
                    evaluateCote:{
                      bottom: -4,
                    }
                  }
              },],
            ]
          }
        }
      },
      {
        customKeyboard: 7,

        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo4',
        contents: {
          artifact_24: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                {
                  type: 0,
                  text: ['f(0.5) ≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['f(-1) ≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f(2) ≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f( ) ≈ -3', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['f( ) ≈ 1.5', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],
              [
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [1.5]
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [-1]
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [3]
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [-1.5]
                }
              },
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [0.5, 3]
                }
              },]

            ]
          }
        }
      },

      //EXAMEN 7
      {
        customKeyboard: 7,

        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo1',
        contents: {
          artifact_25: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                // 1er board - Características #1, de examen 7
                {
                  type: 0,
                  text: ['Dominio', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  //text: ['Max.Abs', null],
                  text: ['Rango',null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Parte Creciente', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Decreciente', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],


              // 1er board - Validaciones de Características #1, de examen 7
              [
                {
                  type: 2,
                  answers_values: ['', '(-∞, ∞)', '(-∞, 3) ∪ (3, ∞)', '(-∞, 0) ∪ (0, 3) ∪ (3, ∞)'],
                  conditions: {
                    correctIndex: 1
                  }
                ,
              }, 
              {
                type: 2,
                answers_values: ['', '(-∞, -2) ∪ [-0.66, ∞)', '(-∞, -2] ∪ (-1, ∞)', '(-∞, -2] ∪ (-0.66, ∞)', '(-∞, -2] ∪ [-1, -0.66) ∪ (-0.66,∞)'],
                conditions: {
                  correctIndex: 2
                }
              ,
              },  
              {
                type: 2,
                answers_values: ['', '(-∞, -1.3) ∪ [3, ∞)', '(-∞, -3)', '(-1.3, 1.3)' , '[-1.3, 1.3]'],
                conditions: {
                  correctIndex: 3
                }
              ,
              },
              
              {
                type: 2,
                answers_values: ['', '(-∞, -1.3] ∪ [1.3, 3) ∪ [3, ∞)', '(-∞, -1.3) ∪ (1.3, 3) ∪ (3, ∞)', '(-∞, -1.3) ∪ (1.3, ∞)'],
                conditions: {
                  correctIndex: 2
                }
              ,
              },
              ],

              [
                // 1er board - Características #2, de examen 7
                {
                  type: 0,
                  text: ['Parte Negativa', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Parte Positiva', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Cortes X', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Cortes Y', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],
                // 1er board - Validaciones de Características #2, de examen 7
              [{
                type: 2,
                answers_values: ['', '(-2.5, 0) ∪ (2.5, ∞)', '(-2.5, 0) ∪ (2.5, 3) ∪ (3, ∞)', '[3, ∞)'],
                conditions: {
                  correctIndex: 1
                }
              ,
              },
              {
                type: 2,
                answers_values: ['', '[3, ∞)', '(-∞, -2.5) ∪ (0, 2.5)', '(0, 2.5)'],
                conditions: {
                  correctIndex: 2
                }
              ,
              },
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [-2.5, 0, 2.5],
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [0]
                }
              },],
            ]
          }
        }
      },
      {
        customKeyboard: 7,

        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo2',
        contents: {
          artifact_26: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [ // 2do board - Características #1, de examen 7
                {
                  type: 0,
                  text: ['Max.Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Max. No Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],



              [
              {// 2do board - Validaciones de Características #1, de examen 7
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              },
              {
                type: 2,
                answers_values: ['', '-∞', '1.3', 'No Existe'],
                conditions: {
                  correctIndex: 3
                }
              ,
              },
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [1,-2],
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [1.3,3],
                }
              },],

              [ // 2do board - Características #2, de examen 7
                {
                  type: 0,
                  text: ['Min.Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Min. No Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],

              [// 2do board - Validaciones de Características #2, de examen 7
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [-1]
                }
              }, 
              {
                type: 2,
                answers_values: ['', '3', '-1.3', '-1.3, 3'],
                conditions: {
                  correctIndex: 2
                }
              ,
              },
            ]

            ]
          }
        }
      },
      {
        customKeyboard: 7,

        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo3',
        contents: {
          artifact_27: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                //Primeras caracteristicas, Examen 7
                {
                  type: 0,
                  text: ['Intervalo',null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(-∞, -1)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(-3, 0)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(-∞, ∞)', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],
              [
              {
                //Validacion primeras caracteristicas
                type: 0,
                text: ['Cota Sup.', null],
                conditions: {
                  correctIndex: null
                }
              }, 
              {
                type: 3,
                inputsDefault:[['',false]],
                conditions: {
                  valueInputs: ['\\nexists'],
                }
              }, 
              {
                type: 3,
                inputsDefault:[["0.5",false]],
                conditions: {
                  valueInputs: ['\\geq0.5','0.5'],
                  evaluateCote:{
                    top: 0.5
                  }
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              },  ],

              //Segundas caracteristicas, Examen 7
              [

                {
                  type: 0,
                  text: ['Intervalo', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(0, ∞)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(-∞, ∞)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(-1.5, 1)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],

              //Validacion segundas caracteristicas, Examen 7
              [
              {
                type: 0,
                  text: ['Cota Inf.', null],
                  conditions: {
                    correctIndex: null
                  }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              },
              {
                type: 3,
                inputsDefault:[["-1",false]],
                conditions: {
                  valueInputs: ['\\leq-1','-1'],
                  evaluateCote:{
                    bottom: -1
                  }
                }
              },],
            ]
          }
        }
      },
      {
        customKeyboard: 7,

        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo4',
        contents: {
          artifact_28: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                //Terceras caracteristicas, Examen 7
                {
                  type: 0,
                  text: ['ƒ(1.3) ≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  //text: ['Max.Abs', null],
                  text: ['ƒ(-3) ≈',null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['ƒ(3) ≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['ƒ( ) ≈ -2', null],
                  conditions: {
                    correctIndex: null
                  }
                },


                {
                  type: 0,
                  text: ['ƒ( ) ≈ -2.5', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],

              //Validacion terceras caracteristicas, Examen 7
              [{
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [1],
                }
              }, 
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [0.5],
                }
              }, 
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [-2],
                }
              }, 
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [3],
                }
              }, 
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [4],
                }
              },],
            ]
          }
        }
      },

      //EXAMEN 8
      {
        customKeyboard: 7,

        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo1',
        contents: {
          artifact_29: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                // 1do board - Características #1, de examen 8
                {
                  type: 0,
                  text: ['Dominio', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  //text: ['Max.Abs', null],
                  text: ['Rango',null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Parte Creciente', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Parte Decreciente', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],



              [ //1do board - Validaciones de Características #1, de examen 8
                {
                  type: 2,
                  answers_values: ['', '(-∞, ∞)', '(-4, 2) ∪ [3, ∞)', '(-4, -2) ∪ (-2, 2) ∪ [3, ∞)'],
                  conditions: {
                    correctIndex: 3
                  }
                ,
              }, 
              {
                type: 2,
                answers_values: ['', '(-∞, -1.5] ∪ [-1.5, -1) ∪ (-1, ∞)', '(-∞, -1.5) ∪ (-1.5, ∞)', '[-3, ∞]', '(-∞, ∞)'],
                conditions: {
                  correctIndex: 4 
                }
              ,
              },  
              {
                type: 2,
                answers_values: ['', '(-4, -2) ∪ (-2, 2) ∪ [3, ∞)', '[-3, ∞]', '(-4, -3) ∪ (0,2) ∪ (3, ∞)', '(-4, ∞)'],
                conditions: {
                  correctIndex: 3
                }
              ,
              },
              
              {
                type: 2,
                answers_values: ['', '(-4, -2) ∪ [3,∞)', '(-3, -2) ∪ (-2,0)', '(-3, 0)', '[-3,0]'],
                conditions: {
                  correctIndex: 2
                }
              ,
              },
              ],

              [
                //1do board - Características #2, de examen 8
                {
                  type: 0,
                  text: ['Parte Negativa', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Parte Positiva', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Cortes X', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Cortes Y', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],

              [{//1do board - Validaciones Características #2, de examen 8
                type: 2,
                answers_values: ['', '(-3, -2) ∪ (-2,0)', '(-4, -3) ∪ (0,2) ∪ (3, ∞)', '(-4,-2) ∪ (-1,1) ∪ (3, ∞)', '(-∞, -1) ∪ (-1, 0)', '(-4,-2) ∪ (-1,1) ∪ [3, ∞)'],
                conditions: {
                  correctIndex: 3
                }
              ,
              },
              {
                type: 2,
                answers_values: ['', '(-2, -1) ∪ (1, 2)', '(-2, 2)', '[-2, 2]', '(-2, -1) ∪ (1, 2) ∪ (3, ∞)' ],
                conditions: {
                  correctIndex: 1
                }
              ,
              },
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [-1, 1],
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [-1],
                },
              },],
            ]
          }
        }
      },
      {
        customKeyboard: 7,

        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo2',
        contents: {
          artifact_30: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                //2do board - Características #1, de examen 8
                {
                  type: 0,
                  text: ['Max.Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Max. No Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],

                //2do board - Validaciones de Características #1, de examen 8
              [{
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [-1.5]
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: [-3]
                }
              }],
                //2do board - Características #2, de examen 8
              [ {
                  type: 0,
                  text: ['Min.Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Min. No Abs', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['Alcanzado en', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],
                //2do board - Validaciones de Características #2, de examen 8
              [{
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [-1, -3]
                }
              }, {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [0, 3]
                }
              }],

            ]
          }
        }
      },
      {
        customKeyboard: 7,

        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo3',
        contents: {
          artifact_31: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                //Primeras caracteristicas, Examen 8
                {
                  type: 0,
                  text: ['Intervalo',null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(0, ∞)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(-2, ∞)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(-∞, ∞)', null],
                  conditions: {
                    correctIndex: null
                  }
                },

              ],
              [
              {
                //Validacion primeras caracteristicas
                type: 0,
                text: ['Cota Sup.', null],
                conditions: {
                  correctIndex: null
                }
              }, 
              {
                type: 3,
                inputsDefault:[['',false]],
                conditions: {
                  valueInputs: ['\\nexists'],
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              },
              {
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              },  ],

              //Segundas caracteristicas, Examen 8
              [

                {
                  type: 0,
                  text: ['Intervalo', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(-4, 0)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(-∞, ∞)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['(-2, 2)', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],

              //Validacion segundas caracteristicas, Examen 8
              [
              {
                type: 0,
                  text: ['Cota Inf.', null],
                  conditions: {
                    correctIndex: null
                  }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              }, 
              {
                type: 3,
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists']
                }
              },
              {
                type: 3,
                inputsDefault:[["-1",false]],
                conditions: {
                  valueInputs: ['\\leq-1','-1'],
                  evaluateCote:{
                    bottom: -1
                  }
                }
              },],
            ]
          }
        }
      },
      {
        customKeyboard: 7,

        type: 13,
        interactive: true,
        classGlobal: 'QA',
        parent: '#ejemplo4',
        contents: {
          artifact_32: {
            allinputs: [],
            header: [],
            dataInteraction: {
              incorrect: 0,
              correct: 0,
              forAnswer: 0
            },
            cells: [
              [
                //Terceras caracteristicas, Examen 8
                {
                  type: 0,
                  text: ['ƒ(1.5) ≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  //text: ['Max.Abs', null],
                  text: ['ƒ(-4) ≈',null],
                  conditions: {
                    correctIndex: null
                  }
                },

                {
                  type: 0,
                  text: ['ƒ(-1) ≈', null],
                  conditions: {
                    correctIndex: null
                  }
                },
                {
                  type: 0,
                  text: ['ƒ( ) ≈ -3', null],
                  conditions: {
                    correctIndex: null
                  }
                },


                {
                  type: 0,
                  text: ['ƒ( ) ≈ -1.5', null],
                  conditions: {
                    correctIndex: null
                  }
                },
              ],


              //Validacion terceras caracteristicas, Examen 8
              [
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [1],
                }
              }, 
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                conditions: {
                  valueInputs: ['\\nexists'],
                }
              }, 
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [0],
                }
              }, 
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [-3.5,-2.5,3],
                }
              }, 
              {
                type: 3,
                // una pregunta. Varios inputs
                inputsDefault: [['', false]],
                oneToManyInput: true,
                conditions: {
                  valueInputs: [-3,4],
                }
              },
              ],
            ]
          }
        }
      },
    ],
  },
}
var defBoards = {
  //Inicio Boards de Annely 1 -- 4  
  //Examen 1.
  board_1: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxHeight: 250,
      maxWidth: 350,
      //CurveType:1,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      boundingbox: [-5, 4.5, 6, -4]
    },
    points: [[0.5, -2, true, null, null, '#2196f3'], [0.42, -2.28, true, null, null, '#2196f3'], [0.37, -2.58, true, null, null, '#2196f3'], 
    [3.55, -2, true, null, null, '#2196f3'], [3.63, -2.28, true, null, null, '#2196f3'], [3.69, -2.58, true, null, null, '#2196f3'],
    [-2.58, 3, true, null, null, '#2196f3'], [-2.65, 3.3, true, null, null, '#2196f3'], [-2.7, 3.6, true, null, null, '#2196f3'],
    [5.7, 2.6, true, null, null, '#2196f3']],
    curves: [[[[ -2.51, 2.76 ],[ -1.99, 1.07 ],[ -1.34, 0.33 ],[ 0, 0 ]]],[[[ 0.5, -1.8 ],[ 2, 1.8 ],[ 3.5, -1.8 ]]],
    [[[ 4, 3.01 ],[ 4.81, 3.97 ],[ 5.08, 3.95 ],[ 5.29, 3.36 ],[ 5.54, 2.79 ]]]]
  },
  
  //Examen 2.
  board_2: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxHeight: 250,
      CurveType:2,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      boundingbox: [-5, 4, 6, -4]
    },
    points: [[-3.6, 0.42, true, null, null, '#2196f3'], [-4, 0.25, true, null, null, '#2196f3'], [-4.4, 0.2, true, null, null, '#2196f3'], 
    [0.39, -2.58, true, null, null, '#2196f3'], [0.33, -2.9, true, null, null, '#2196f3'], [0.3, -3.2, true, null, null, '#2196f3'], 
    [5.25, 2.3, true, null, null, '#2196f3'], [ 3.5, -0.5,true,'',2,true ],[5.45, 2.6, true, null, null, '#2196f3'], [5.6, 2.9, true, null, null, '#2196f3']],
    curves: [[[[ -3.4, 0.53 ],[ -3, 1 ],[ -2, 3 ],[ -1.02, 1.01 ,true]]],
  [[[ 0.41, -2.34 ],[ 0.71, -1.24 ],[ 1.1, -0.78 ], [2.25, -0.57 ],[ 3.43, -0.5]]],
  [[[3.47,1.5,true],[4.35,1.6],[5.1,2.1]]]], 
    
  },
  
  //Examen 3.
  board_3: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxHeight: 200,
      CurveType:2,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      boundingbox: [-5, 4, 6, -4],
    },
    points: [[ -2.02, -2.93,true,'',2,true ],[-3.3, -3.3, true, null, null, '#2196f3'], [-3.4, -3.6, true, null, null, '#2196f3'], [5.57, 1.3, true, null, null, '#2196f3'], 
    [1.76, -2.75, true, null, null, '#2196f3'], [1.80, -3.05, true, null, null, '#2196f3'], [1.83, -3.35, true, null, null, '#2196f3'], 
    [3.43, -2.95, true, null, null, '#2196f3'], [3.39, -3.23, true, null, null, '#2196f3'], [3.35, -3.51, true, null, null, '#2196f3']],
    curves: [[[[ -2, 2.3,true],[ -1.51, 0.8 ],[ -0.8, 0.1],[ 0, 0 ],[ 0.8, -0.1 ],[ 1.28, -0.8],[ 1.73, -2.53]]],
  [[[ 3.44, -2.74 ],[ 3.95, 0.67],[ 4.3, 1.2],[ 5.36, 1.31 ]]],
  [[[ -3.24, -3.12 ],[ -2.55, -1 ],[ -2.04, -2.85,]]]],
  },

  //Examen 4.
  board_4: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxHeight: 200,
      CurveType:2,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      boundingbox: [-5, 4, 6, -4]
    },
    points: [[ -2,-3,true,'',2,true],[-4.25, -3, true, null, null, '#2196f3'], [-4.6, -3, true, null, null, '#2196f3'], 
    [0.65, 2.85, true, null, null, '#2196f3'], [0.7, 3.15, true, null, null, '#2196f3'], [0.73, 3.45, true, null, null, '#2196f3'], 
    [5.2, -2.7, true, null, null, '#2196f3'], [5.4, -2.5, true, null, null, '#2196f3'],[5.7, -2.41, true, null, null, '#2196f3']],
    curves: [[[[ -4, -3],[ -2.1,-3],]],
    [[[ -2, -1 ,true],[ -0.26, -0.3 ],[ 0.31, 1],[ 0.63, 2.6 ]]],
    [[[2,-2,true],[3,1],[4,-2],[4.8,-3.3],[5.1,-2.9]]]],
  },
  //Fin Boards Annely
  //Inicio Boards Luis 5 -- 6
  board_5: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxHeight: 250,
      maxWidth: 300,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      boundingbox: [-5, 4, 5, -4]
    },

    curves: [
              [[[ -3.63, -2.8 ], [ -2.71, -2.48 ],[ -2, -2], [ -1.01, -0.97 ], [ -0.05, -1.95 ]]],
              [[[ 0, 0 ], [ 2.45, 2.45 ]]],
              [[[ 2.5, 3 ], [ 4, 3 ]]],
            ],

    points: [[0, 0, true], [0, -2, true, '', 2, true], [2.5, 2.5, true, '', 2, true], [2.5, 3, true], [4,3, true], 
            [4.4, 3, true], [-3.63, -2.8, true], [-4, -2.85, true], [-4.4, -2.87, true]]
          
    
  },

  board_6: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxHeight: 250,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      boundingbox: [-5, 4, 5, -4]
    },

    

    curves: [
              [[[ -3.5, -3.7 ],[ -2, -3.5 ], [ -1.5, -3 ],[ -1, -1.55]]],
              [[[ 0.5, 1.5 ],[ 1.5, 2.2 ],[ 2, 3 ],[ 2.5, 2.2 ],[ 3.5, 1.4 ]]],
              [[[-1,-1],[0.45,0.45]]]
            ],
    points: [[0.5, 0.5, true, '', 2, true], [-1, -1.5, true, '', 2, true], [-1,-1, true], [0.5, 1.5, true], [3.5, 1.4, true],[3.9, 1.28, true], [4.3, 1.18, true], [4.7, 1.15, true]
            ,[-3.5, -3.7, true], [-3.9, -3.7, true], [-4.3, -3.7, true]]
  },
  //Fin Boards Luis
  //Inicio Boards Manuenl 7 -- 8
  board_7: {
  style: {
    axis: [false, true, true],
    grid: true,
    maxHeight: 250,
    valueAxis: {
      yd: [[0, 0], [0, 1]],
      xd: [[0, 0], [1, 0]]
    },
    boundingbox: [-5, 4, 7, -4]
  },

  curves: [
            [[[-2.96, 0.59],[-1.3, -0.93],[0.02, 0.03],[1.14, 0.98],[3.04, -0.66]]],
            [[[3.0,-2.0],[5,-3,true]]],
          ],
  points: [[3.04, -0.66, true, '', 2, true], [-2.96, 0.59, true], [-3.20, 0.90, true],[-3.45, 1.23, true], [3.0,-2.0, true], [5.30,-3.15,true], [5.60,-3.30,true],]
  },

  board_8: {
    style: {
      axis: [false, true, true],
      grid: true,
      maxHeight: 250,
      maxWidth: 300,
      valueAxis: {
        yd: [[0, 0], [0, 1]],
        xd: [[0, 0], [1, 0]]
      },
      boundingbox: [-5, 4, 6, -5]
    },

    curves: [
      [[[ -1.6, 1.2, true], [ 0.0, -1.0 ],[ 1.6, 1.2, true],]],
      [[[-3.60,-3.5, true],[-3.0,-1.5],[-2.35,-3.5, true]]],
      [[[3,-3,true],[4,-1.5],[5,-1.2, true]]]
    ],

    points: [[5.40,-1.2, true],[5.8,-1.2, true], [-3.63,-3.8, true], [-3.66,-4.1, true],[-2.31,-3.8, true], [-2.29,-4.1, true], [-1.66, 1.5, true], [-1.70, 1.8, true], [1.66, 1.5, true], [1.70, 1.8, true]]
  },
};

let position = localStorageSeleccionados("P1", 1, 8, 1);
console.log(position);
[def, defBoards] = PintaSeleccionP1(position, def, defBoards,'P1');

defBoardDefault();
generator(def);

/*defBoards = {
  board_0: {
    style: {
      boundingbox:[-4,4,4,-4],
      maxHeight: 300,
      maxWidth: 300,
    },
  },
  board_1: {
    style: {
      boundingbox:[-5,5,5,-5],
      maxHeight: 300,
      maxWidth: 300,
    },
  },
  board_2: {
    style: {
      boundingbox: [-5, 4, 6, -4],
      maxHeight: 300,
      maxWidth: 300,
    },
  },
};*/
  
//si se va a agregar algo al objeto tiene que declararce la propiedad por defecto en el mod.js
  
/*const def = {
  //No valida algunos ejemplos de funciones (problema hablado con el equipo de ALcaravan. Sus motores no son capaces de hacerlo).
  artifact_1: {
    board: 'board_1',
    statementBottom: ['Mínimo absoluto alcanzado en -1,5 y 1,5.', 'No tiene máximos.'],
    conditions: {
      conexa: { type: 4 },
      max:
      {global:0,
      localcount:0,},
      min: { global: [-1.5,1.5]},
    },
  },
  artifact_2: {
    board: 'board_1',
    statementBottom: ['Mínimo absoluto alcanzado en -1,5 y 1,5.','Máximo de f es -3 alcanzado en 0,5.','Dominio R.'],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1,2],[4,5], 3, false, false]],
      },
      max:{
        maxTotal: -3,
        global:[0.5],
      },
      min: { global: [-1.5,1.5],},
    },
  },
  artifact_3: {
    board: 'board_1',
    statementBottom: ['Dominio = ( -4,4 ]', 'Rango ( -3,2 ]','f es creciente en ( 0,2 )','f es decreciente en ( -2,-1 )'],
    conditions: {
      conexa: { type: 3 },
      dom: { range: [[-4, 4, 3, true, false]] },
      rang: {
        mulIntervals: [
          [[2,-3, false, true]]
        ],
      },
      upDown:{intervals:[[false,[-2,-1]]]},
      upDown:{intervals:[[true,[0,2]]]},
    },
  },
  artifact_4: {
    board: 'board_1',
    statementBottom: ['Máximo absoluto alcanzado en -2,5 y 2,5.', 'Dominio R.'],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1,2,8],[4,5,6], 3, false, false]],
      },
      max:
      {global: [-2.5, 2.5],},
    },
  },
  artifact_5: {
    //Igual que artefacto 2.
    board: 'board_1',
    statementBottom: ['Mínimo absoluto alcanzado en -2,5 y 2,5.', 'Máximo de f es 2 alcanzado en 0.','Dominio R.'],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1,2],[4,5], 3, false, false]],
      },
      max:{
        maxTotal: 2,
        global:[0],    
      },
      min: { global: [-2.5,2.5],},
    },
  },
  artifact_6: {
    board: 'board_1',
    statementBottom: ['Dominio [ -3,∞ )', 'Rango [ -4,3 ]','f crece en ( -2,0 )','f decrece en ( 0,2 )'],
    conditions: {
      conexa: { type: 3 },
      dom: { range: [[-3, [4,5], 3, false, false]] },
      rang: {
        mulIntervals: [
          [[3,-4, false, false]]
        ],
      },
      upDown:{intervals:[[false,[0,2]]]},
      upDown:{intervals:[[true,[-2,0]]]},
    },
  },
  artifact_7: {
    board: 'board_1',
    statementBottom: ['Mínimo absoluto alcanzado en dos puntos.', 'Dominio [ -4,2 )'],
    conditions: {
      conexa: { type: 3 },
      dom: { range: [[-4, 2, 3, false, true]] },
      min: { global: 2},
    },
  },
  artifact_8: {
    board: 'board_1',
    //Igual que artefacto 2 y 5.
    statementBottom: ['Mínimo absoluto alcanzado en -1 y 3,5.','Máximo de f es 2 alcanzado en 0.','Dominio R.'],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1,2],[4,5], 3, false, false]],
      },
      max:{
        maxTotal: 2,
        global:[0],   
      },
      min: { global: [-1,3.5]},
    },
  },
  artifact_9: {
    board: 'board_1',
    statementBottom: ['Dominio ( -4,0 )','Rango [ -2,2 ]','f creciente en ( -2,-0.5)','Máximo de f es 2 alcanzado en -3'],
    conditions: {
      conexa: { type: 3 },
      dom: { range: [[-4, 0, 3, true, true]] },
      rang: {
        mulIntervals: [
          [[2,-2, false, false]]
        ],
      },
      upDown:{intervals:[[true,[-2,-0.5]]]},
      max:{
        maxTotal: 2,
        global:[-3],    
      },
    },
  },
  artifact_10: {
    //Problema: Acepta dos maximos globales.
    board: 'board_1',
    statementBottom: ['Mínimo absoluto alcanzado en dos puntos.', 'Un máximo absoluto alcanzado en 2.5'],
    conditions: {
      conexa: { type: 3 },
      max:{ global: [2.5],
      },
      min: { global: 2},
    },
  },
  artifact_11: {
    //Igual que artefacto 2,5 y 8.
    board: 'board_1',
    statementBottom: ['Máximo absoluto alcanzado en 0 y 3.','Mínimo de f es -1,5 alcanzado en 1.', 'Dominio R'],
    conditions: {
      conexa: { type: 3 },
      dom: {
        range: [[[1,2],[4,5], 3, false, false]],
      },
      max:{ global:[0,3] },
      min:{
        minTotal: -1.5,
        global:[1],    
      },
    },
  },
  artifact_12: {
    board: 'board_1',
    statementBottom: ['Dominio [ -3,4 ]','Rango ( -2,2 ]','f decreciente en (2,4)'],
    conditions: {
      conexa: { type: 3 },
      dom: { range: [[-3, 4, 3, false, false]] },
      rang: {
        mulIntervals: [
          [[2,-2, false, true]]
        ],
      },
      upDown:{intervals:[[false,[2,4]]]},
    },
},

//Artefactos elaboradoos por luis
artifact_13: {
    board: 'board_2',
    statementBottom: ["Dominio (-3, 5).", "No tiene minimos.", "Un maximo absoluto alcanzado en dos puntos"],
    conditions: {
      conexa: { type: 3 },
      dom: { range: [[-3, 5, 3, true, true]] },
      max: { 
        noise: 0.15,
        global: 2,
      },
      min:{
        noise: 0.15,
        global: 0,
        localcount: 0,
      },
    },
  },
  artifact_14: {
    board: 'board_2',
    statementBottom: ["Minimo absoluto alcanzado en -3,5 y 3,5."," Maximo de f es 3,5 alcanzado en 0.","Dominio R"],
    conditions: {
      conexa: { type: 3 },
      dom: { range: [[[1], [5], 1, false, false]] },
      min: { global: [-3.5, 3.5] },

      max: { 
        global: [0],
        maxTotal: 3.5,
      }
    },
  },
  artifact_15: {
    board: 'board_2',
    statementBottom: ["Dominio (-2, ∞)", "Rango (0, ∞)", " f es creciente en (-2, 0)"],
    conditions: {
      conexa: { type: 3 },
      dom: { range: [[-2, [4], 3, true, false]] },
      upDown: { intervals: [[true, [-2, 0]]]},

      //resolver problema con el rango xd
      rang: {
        mulIntervals: [
          [[[4], 0, false, true]]
        ],
      },

    },
  },

  artifact_16: {
    board: 'board_2',
    statementBottom: ["Un minimo absoluto alcanzado en -2 y 2", "no tiene maximo"],
    conditions: {
      conexa: { type: 3 },
      min: {
        noise: 0.15,
        global: [-2, 2],
      },

      max: {
        localcount: 0,
        global: 0,
      },

    },
  },

  artifact_17: {
    board: 'board_2',
    statementBottom: ["Un minimo absoluto alcanzado en dos puntos.", "no tiene maximo", "Dominio (-3, 2)"],
    conditions: {
      conexa: { type: 3 },
      dom: { range: [[-3, 2, 3, true, true]] },

      min: {
        noise: 0.15,
        global: 2,
      },

      max: {
        localcount: 0,
        global: 0,
      },
    },
  },

  artifact_18: {
    board: 'board_2',
    statementBottom: ["Dominio (-3, 3]", "Rango (-2,3]", " f es decreciente en (-2, -1)", "f es creciente de (0,1)"],
    conditions: {
      conexa: { type: 3 },
      dom: { range: [[-3, 3, 3, true, false]] },
      upDown: { intervals: [[false, [-2, -1]],[true, [0,1]]]},

      //resolver problema con el rango xd
      rang: {
        mulIntervals: [
          [[3, -2, false, true]]
        ],
      },

    },
  },

  artifact_19: {
    board: 'board_2',
    statementBottom: ["Un maximo absoluto alcanzado en 0 y 2.5", "no tiene minimos"],
    conditions: {
      conexa: { type: 3 },
      max: {
        noise: 0.15,
        global: [0, 2.5],
      },

      min: {
        localcount: 0,
        global: 0,
      },

    },
  },

  artifact_20: {
    board: 'board_2',
    statementBottom: ["Minimo absoluto alcanzado en dos puntos", "Maximo de f es 3 alcanzado en 0", "Dominio R"],
    conditions: {
      conexa: { type: 3 },
      dom: { range: [[[1,8,2], [4,5,6], 1, false, false]] },

      min: {
        global: 2,
      },

      max: {
        global: [0],
        maxTotal: 3,
      }


    },
  },

  artifact_21: {
    board: 'board_2',
    statementBottom: ["Dominio R", " f es creciente en (1,2)", "f es decreciente en (-1,0)"],
    conditions: {
      conexa: { type: 3 },
      dom: { range: [[[1,8,2], [4,5,6], 3, false, true]]},
      upDown: { intervals: [[true, [1, 2]], [false, [-1,0]]]},
    },
  },

  //Inicio Artefactos Manuel - examen 8
  artifact_22: {
statementBottom: 'Un mínimo absoluto alcanzado en 3 y -3, No tiene máximos.',
conditions: {
  max: { global: 0, localcount: 0,},
  min: { global: [-3,3], noise: 0.05  },
  //conexa: { type: 2 },
  //dom: { range: [[-1, 2, 1, false, false]] },
  //countsX: { value: 2 },
},
  },
  artifact_23: { //tiene problemas al limitarlo para reconocer maximo y dominio a la vez, por ejemplo que el maximo venga luego de un salto finito y luego la funcion baje
    statementBottom: 'Máximo absoluto alcanzado en un punto. Mínimo absoluto de f es –2,5 alcanzado en 2. Dominio R',
    conditions: {
      max: { global: 1, noise: 0.05},
      min: { global: [2], minTotal: -2.5, noise: 0.05  },
      conexa: { type: 3 },
      dom: { range: [[[1,8,2], [4,5,6], 1, false, false]] },
      //dom: { range: [[[1],[5], 3, false, false]] },
      //countsX: { value: 2 },
    },
  },
  artifact_24: {
    statementBottom: ' Dominio [–3,3], f decreciente en [0,2) y Creciente en (-2,-1)',
    conditions: {
      //rang: { mulIntervals:[
        //  [[[2,3,4], -2,false, false]]
       // ],
      //},
      upDown: {intervals: [[false,[0,2]]],
      },
      upDown: {intervals: [[true,[-2,-1]]],
      },
      conexa: { type: 3 },
      dom: { range: [[-3, 3, 3, false, false]] },
    },
  },
  //Fin artefactos Manuel 
};*/

/*position = localStorageSeleccionados("P2",1,24,3);
PintaSeleccionP2(position);

window.onload = main();*/


document.addEventListener("DOMContentLoaded", function () {
    const paginaExamen = document.getElementById("paginaExamen");
    const notaprevia = document.getElementById("previous");
    const notaafter = document.getElementById("after");
    // Recupera los datos almacenados en localStorage
    const Datos = JSON.parse(localStorage.getItem("Datos"));
    console.log(Datos);

    // Pinta los datos en el DOM
    document.getElementById("institucion").innerHTML = Datos.Instituto;
    document.getElementById("Categoria").innerHTML = Datos.Categoria;
    document.getElementById("materia").innerHTML = Datos.Curso;
    document.getElementById("seccion").innerHTML = Datos.Seccion;
    document.getElementById("nombreEstudiante").innerHTML =
        Datos.Estudiante.Nombre;
    document.getElementById("correoEstudiante").innerHTML =
        Datos.Estudiante.Correo;
    document.getElementById("capExam").innerHTML = Datos.Capitulo;
    document.getElementById("codExam").innerHTML = Datos.CodExam;

    // Verifica y compara fechas
    let fechaHoraInicio = Datos.fechaHoraInicio;
    let fechaHoraCierre = Datos.fechaHoraCierre;

    if (fechaHoraInicio && fechaHoraCierre) {
      const fechaHoraInicioDate = new Date(fechaHoraInicio);
      const fechaHoraCierreDate = new Date(fechaHoraCierre);
      const currentDate = new Date();

      if (fechaHoraInicioDate > currentDate) {
        console.log("La evaluación aún no ha comenzado.");
        paginaExamen.style.display = "none";
        notaprevia.style.display = "block";
      } else if (
        fechaHoraInicioDate <= currentDate &&
        currentDate <= fechaHoraCierreDate
      ) {
        console.log("La evaluación ya ha comenzado o debería haber comenzado.");
        let rules = document.getElementById("rules");
        rules.style.display = "block";
        let rulesBtn = document.getElementById("buttonRule");
        rulesBtn.addEventListener("click", () => {
          (rules.style.display = "none"),
            (fechaInicioEst = localStorage.getItem("fechaInicioEst"));
          PintaBordes(colorBorders);
          if (fechaInicioEst === null) {
            fechaInicioEst = currentDate;
            localStorage.setItem("fechaInicioEst", fechaInicioEst);
          }

          paginaExamen.style.display = "block";
        });
      } else {
        console.log(
          "La evaluación ya ha finalizado o debería haber finalizado."
        );
        paginaExamen.style.display = "none";
        notaafter.style.display = "block";
      }
    } else {
      console.log("No hay una fecha de inicio almacenada.");
    }
});

function ocultarDivPorRadio() {
  const radios = document.querySelectorAll('input[type="radio"][name="opcion"]');
  const divs = {
      '1': document.getElementById('optOne'),
      '2': document.getElementById('optTwo'),
      '3': document.getElementById('optThree'),
      '4': document.getElementById('optFour')
  };

  console.log('Radios encontrados:', radios.length);
  console.log('Divs encontrados:', Object.values(divs).filter(div => div !== null).length);

  // Ocultar todos los divs inicialmente
  Object.values(divs).forEach(div => {
      if (div) {
          div.style.display = 'none';
          console.log(`Ocultando inicialmente: ${div.id}`);
      }
  });

  // Mostrar el div correspondiente al radio seleccionado inicialmente
  const checkedRadio = document.querySelector('input[type="radio"][name="opcion"]:checked');
  if (checkedRadio) {
      const selectedDiv = divs[checkedRadio.value];
      if (selectedDiv) {
          selectedDiv.style.display = 'block';
          console.log(`Mostrando inicialmente: ${selectedDiv.id}`);
      }
  }

  radios.forEach(radio => {
      radio.addEventListener('change', function() {
          console.log(`Radio seleccionado: ${this.value}`);

          // Ocultar todos los divs
          Object.values(divs).forEach(div => {
              if (div) {
                  div.style.display = 'none';
                  console.log(`Ocultando: ${div.id}`);
              }
          });

          // Mostrar solo el div correspondiente al radio seleccionado
          const selectedDiv = divs[this.value];
          if (selectedDiv) {
              selectedDiv.style.display = 'block';
              console.log(`Mostrando: ${selectedDiv.id}`);
          } else {
              console.log(`Div no encontrado para el valor: ${this.value}`);
          }
      });
  });
}

// Llamar a la función cuando se cargue el documento
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM cargado, ejecutando ocultarDivPorRadio');
  ocultarDivPorRadio();
});