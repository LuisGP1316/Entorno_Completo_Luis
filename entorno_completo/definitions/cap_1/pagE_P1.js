"use strict";

var def = {
    artefact_1: {
    datadefault: [
        {
            customKeyboard: 7,
    
            type: 13,
            interactive: true,
            classGlobal: 'QA',
            parent: '#ejemplo1',
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
                    //Primeras caracteristicas, Examen 1
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
                    //Validacion primeras caracteristicas
                    type: 2,
                    answers_values:["","(-3,∞)","R-{0,4}","(-∞,0)∪(0,4)∪(4,∞)","(-∞,∞)"],
                    conditions: {
                      valueInputs:["(-∞,∞)"]
                    }
                  }, 
                  {
                    type: 2,
                    answers_values:["","(-∞,4)","(-∞,∞)","(-∞,1.8)∪(3,∞)","R-{0,1.8,3}"],
                    conditions: {
                      valueInputs: ['(-∞,∞)']
                    }
                  }, 
                  {
                    type: 3,
                    inputsDefault: [['', false]],
                    oneToManyInput: true,
                    conditions: {
                      valueInputs: [0,1,3]
                    }
                  }, 
                  {
                    type: 3,
                    inputsDefault: [['', false]],
                    conditions: {
                      valueInputs: [0]
                    }
                  }],
    
                  //Segundas caracteristicas, Examen 1
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
    
                  //Validacion segundas caracteristicas, Examen 1
                  [
                  {
                    type: 2,       
                    answers_values:["","(-∞,0)∪(1,3)∪[4,∞)","(-∞,0]∪[1,3]∪[4,∞)","(-3,0)∪(1,3)∪[4,∞)","(-3,0]∪[1,3]∪[4,∞)"],
                    conditions: {
                      valueInputs: ["(-∞,0)∪(1,3)∪[4,∞)"]
                    }
                  }, 
                  {
                    type: 2,
                    answers_values:["","(0,1]∪[3,4)","[0,1]∪[3,4]","(0,1)∪(3,4)","[0,1)∪(3,4]"],
                    conditions: {
                      valueInputs: ["(0,1)∪(3,4)"]
                    }
                  }, 
                  {
                    type: 2,
                    answers_values:["","(0,2]∪(4,5)","[0,2]∪[4,5]","(0,2]∪[4,5]","(0,2)∪(4,5)"],
                    conditions: {
                      valueInputs: ["(0,2)∪(4,5)"]
                    }
                  }, 
                  {
                    type: 2,
                    answers_values:["","(-3,0]∪(2,4)∪[5,∞)","(-∞,0]∪(2,4)∪[5,∞)","(-∞,0)∪(2,4)∪(5,∞)","(-3,0)∪(2,4)∪(5,∞)"],
                    conditions: {
                      valueInputs: ["(-∞,0)∪(2,4)∪(5,∞)"]
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
                  [{
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
                  }],
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
                  [{
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
                    }
                  }]
    
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
                  }],
    
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
                    answers_values:["","(-∞,-1)∪(3.5,∞)","","","(-∞,-1]∪[3.5,∞)"],
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
                  [{
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
                  }],
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
                  [{
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
                    }
                  }]
    
                ]
              }
            }
          },
    
          {
            customKeyboard: 7,
    
            type: 13,
            interactive: true,
            classGlobal: 'QA',
            parent: '#ejemplo5',
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
                    answers_values:["","(-∞,1.3)∪(1.3,2.3)","(-∞,-3)∪(-3,2.3)","(-∞,-3)∪(-3,1.3)∪(1.3,2.3)","(-∞,2.3)"],
                    conditions: {
                      valueInputs: ['(-∞,2.3)']
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
                  }],
    
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
            parent: '#ejemplo6',
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
                  }],
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
                  [{
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
                    }
                  }]
    
                ]
              }
            }
          },
          
          {
            customKeyboard: 7,
    
            type: 13,
            interactive: true,
            classGlobal: 'QA',
            parent: '#ejemplo7',
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
                    answers_values:["","(-∞,-2)∪(-2,1)∪(2,∞)","(-∞,-2)∪(-2,1)∪[2,∞)","(-∞,1)∪[2,∞)","(-∞,2)∪(2,∞)"],
                    conditions: {
                      valueInputs:["(-∞,1)∪[2,∞)"]
                    }
                  }, 
                  {
                    type: 2,
                    answers_values:["","(-3.3,∞)","(-∞,∞)","(-∞,-3)∪(-2,∞)","(-3.3,-3)∪(-2,∞)"],
                    conditions: {
                      valueInputs: ['(-3.3,∞)']
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
                  }],
    
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
            parent: '#ejemplo8',
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
                  [{
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
                    type: 2,
                    answers_values:["","-3","-3,1","1","∄"],
                    conditions: {
                      valueInputs: ["-3,1"]
                    }
                  },
                  {
                    type: 2,
                    answers_values:["","∄","(-∞,-2),3","(-∞,-2)","3"],
                    conditions: {
                      valueInputs: ["(-∞,-2),3"]
                    }
                  }],
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
                  [{
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
                    type: 2,
                    answers_values:["","-3.3,-2,-1","-2,-1","-3.3,-3,-2,-1","-3,-2,-1"],
                    conditions: {
                      valueInputs: ["-3,-2,-1"]
                    }
                  }, 
                  {
                    type: 2,
                    answers_values:["","","","(-∞,-2),2,-2",""],
                    conditions: {
                      valueInputs: ["(-∞,-2),2,-2"]
                    }
                  }]
    
                ]
              }
            }
          },
    ],
  },
};

var defBoards = {
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
    [[[2,-2],[3,1],[4,-2],[4.8,-3.3],[5.1,-2.9]]]],
  },
};

//let position = seleccionarAleatorios(1, 8, 1);
let position = localStorageSeleccionados("P1", 1, 8, 1);
[def, defBoards] = PintaSeleccionP1(position, def, defBoards,'P1');

defBoardDefault();
generator(def);

var btnValidate1 = document.querySelector("#btn-validation1");
var btnReset1 = document.querySelector("#btn-reset1");
var btnNotExist1 = document.querySelector("#btn-not-Exist1");
var btnValidate2 = document.querySelector("#btn-validation2");
var btnReset2 = document.querySelector("#btn-reset2");
var btnNotExist2 = document.querySelector("#btn-not-Exist2");
var btnValidate3 = document.querySelector("#btn-validation3");
var btnReset3 = document.querySelector("#btn-reset3");
var inputsTable1 = document.querySelectorAll(".input-table1");
var inputsTable2 = document.querySelectorAll(".input-table2");
var inputActiveTable1 = null;
var inputActiveTable2 = null;
var countersTable1 = {
    respCorrect: 0,
    respIncorrect: 0,
};
var countersTable2 = {
    respCorrect: 0,
    respIncorrect: 0,
};

//***************/

// //RESPUESTA TABLA 1
// var successResponse = [{
//   idInput: 'input_1',
//   responses: ['∄']
// }, {
//   idInput: 'input_2',
//   responses: ['∄']
// }, {
//   idInput: 'input_3',
//   responses: ['∄']
// }, {
//   idInput: 'input_4',
//   responses: ['∄']
// }, {
//   idInput: 'input_5',
//   responses: ['∄']
// }, {
//   idInput: 'input_6',
//   responses: ['∄']
// }, {
//   idInput: 'input_7',
//   responses: ['∄']
// }, {
//   idInput: 'input_8',
//   responses: ['∄']
// }, {
//   idInput: 'input_9',
//   responses: ['∄']
// }, {
//   idInput: 'input_10',
//   responses: ['∄']
// }, {
//   idInput: 'input_11',
//   responses: ['∄']
// }, {
//   idInput: 'input_12',
//   responses: ['∄']
// }, {
//   idInput: 'input_13',
//   responses: ['∄']
// }, {
//   idInput: 'input_14',
//   responses: ['∄']
// }, {
//   idInput: 'input_15',
//   responses: ['∄']
// }, {
//   idInput: 'input_16',
//   responses: ['∄']
// }, {
//   idInput: 'input_17',
//   responses: ['1']
// }, {
//   idInput: 'input_18',
//   responses: ['-3/2', '-1.5', '-7/5', '-1.4', '-8/5', '-1.6']
// }, {
//   idInput: 'input_19',
//   responses: ['0']
// }, {
//   idInput: 'input_20',
//   responses: ['3']
// }, {
//   idInput: 'input_21',
//   responses: ['3/2', '1.5', '7/5', '1.4', '8/5', '1.6']
// }, {
//   idInput: 'input_22',
//   responses: ['-2;1/2', '-2,1/2', '1/2;-2', '1/2,-2', '{-2,1/2}', '{1/2,-2}', '-2;0.5', '-2,0.5', '0.5;-2', '0.5,-2', '{-2,0.5}', '{0.5,-2}', '-2;0,5', '0,5;-2', '-2;2/5', '-2,2/5', '2/5;-2', '2/5,-2', '{-2,2/5}', '{2/5,-2}', '-2;0.4', '-2,0.4', '0.4;-2', '0.4,-2', '{-2,0.4}', '{0.4,-2}', '-2;0,4', '0,4;-2', '-2;3/5', '-2,3/5', '3/5;-2', '3/5,-2', '{-2,3/5}', '{3/5,-2}', '-2;0.6', '-2,0.6', '0.6;-2', '0.6,-2', '{-2,0.6}', '{0.6,-2}', '-2;0,6', '0,6;-2'] //AQUI
// },
// // '1/2', '0.5', '2/5', '0.4','3/5','0.6'
// {
//   idInput: 'input_23',
//   responses: ['∄']
// }, {
//   idInput: 'input_24',
//   responses: ['∄']
// }];
// // RESPUESTAS  TABLA 2
// var successResponse2 = [{
//   idInput: 'input_25',
//   responses: ['-1']
// }, {
//   idInput: 'input_26',
//   responses: ['0']
// }, {
//   idInput: 'input_27',
//   responses: ['∄']
// }, {
//   idInput: 'input_28',
//   responses: ['∄']
// }, {
//   idInput: 'input_29',
//   responses: ['-1/2', '-0.5', '-2/5', '-0.4', '-3/5', '-0.6']
// }, {
//   idInput: 'input_30',
//   responses: ['3']
// }, {
//   idInput: 'input_31',
//   responses: ['∄']
// }, {
//   idInput: 'input_32',
//   responses: ['∄']
// }, {
//   idInput: 'input_33',
//   responses: ['∄']
// }, {
//   idInput: 'input_34',
//   responses: ['∄']
// }, {
//   idInput: 'input_35',
//   responses: ['∄']
// }, {
//   idInput: 'input_36',
//   responses: ['∄']
// }, {
//   idInput: 'input_37',
//   responses: ['∄']
// }, {
//   idInput: 'input_38',
//   responses: ['∄']
// }, {
//   idInput: 'input_39',
//   responses: ['∄']
// }, {
//   idInput: 'input_40',
//   responses: ['∄']
// }, {
//   idInput: 'input_41',
//   responses: ['-1']
// }, {
//   idInput: 'input_42',
//   responses: ['3/2', '1.5', '7/5', '1.4', '8/5', '1.6']
// }, {
//   idInput: 'input_43',
//   responses: ['0']
// }, {
//   idInput: 'input_44',
//   responses: ['-3']
// }, {
//   idInput: 'input_45',
//   responses: ['-3/2', '-1.5', '-7/5', '-1.4', '-8/5', '-1.6']
// }, {
//   idInput: 'input_46',
//   responses: ['2']
// }, {
//   idInput: 'input_47',
//   responses: ['-1/2;1', '-1/2,1', '1;-1/2', '1,-1/2', '-0.5;1', '-0.5,1', '1;-0.5', '1,-0.5', '{-0.5,1}', '{1,-0.5}', '{1,-1/2}', '{-1/2,1}', '-0,5;1', '1;-0,5', '-2/5;1', '-2/5,1', '1,-2/5', '1;-2/5', '-0.4;1', '-0.4,1', '1;-0.4', '1,-0.4', '{-0.4,1}', '{1,-0.4}', '{1,-2/5}', '{-2/5,1}', '-0,4;1', '1;-0,4', '-3/5;1', '-3/5,1', '-0.6;1', '-0.6,1', '{-0.6,1}', '{1,-0.6}', '{1,-3/5}', '{-3/5,1}', '-0,6;1', '1;-0,6', '1;-1/2', '1,-1/2', '-1/2;1', '-1/2,1', '{-0.5,1}', '{1,-0.5}', '{1,-1/2}', '{-1/2,1}', '-0,5;1', '1;-0,5', '-2/5;1', '-2/5,1', '1;-2/5', '1,-2/5', '-0.4;1', '-0.4,1', '1,-0.4', '1;-0.4', '{-0.4,1}', '{1,-0.4}', '{1,-2/5}', '{-2/5,1}', '-0,4;1', '1;-0,4', '-3/5;1', '-3/5,1', '1;-3/5;', '1,-3/5;', '-0.6;1', '-0.6,1', '1;-0.6', '1,-0.6', '{-0.6,1}', '{1,-0.6}', '{1,-3/5}', '{-3/5,1}', '-0,6;1', '1;-0,6']
//   // compareTo: {
//   //     input: "input48",v
//   //     values: [
//   //         { value: "-0.5 y 1", with: "-1.5 y -2.5" },
//   //         { value: "1 y -0.5", with: "-2.5 y -1.5" }
//   //     ]
//   // }
//   //'-1/2', '-0.5', '-2/5', '-0.4','-3/5','-0.6'
// }, {
//   idInput: 'input_48',
//   responses: ['-3/2;-5/2', '-3/2,-5/2', '-5/2;-3/2', '-5/2,-3/2', '{-3/2,-5/2}', '{-5/2,-3/2}', '{-3/2, -5/2}', '{-5/2, -3/2}', '-2.5;-1.5', '-2.5,-1.5', '-1.5;-2.5', '-1.5,-2.5', '{-1.5,-2.5}', '{-2.5,-1.5}', '-2,5;-1,5', '-1,5;-2,5', '-2.4;-1.4', '-2.4,-1.4', '-1.4;-2.4', '-1.4,-2.4', '{-1.4,-2.4}', '{-2.4,-1.4}', '-2,4;-1,4', '-1,4;-2,4', '-2.6;-1.6', '-2.6,-1.6', '-1.6;-2.6', '-1.6,-2.6', '{-1.6,-2.6}', '{-2.6,-1.6}', '-2,6;-1,6', '-1,6;-2,6', '-7/5;-12/5', '-7/5,-12/5', '-12/5;-7/5', '-12/5,-7/5', '{-7/5,-12/5}', '{-12/5,-7/5}', '-8/5;-13/5', '-8/5,-13/5', '-13/5;-8/5', '-13/5,-8/5', '{-8/5,-13/5}', '{-13/5,-8/5}', '-2.4;-1.5', '-2.4,-1.5', '-1.5;-2.4', '-1.5,-2.4', '{-1.5,-2.4}', '{-2.4,-1.5}', '-2,4;-1,5', '-1,5;-2,4', '-2.5;-1.4', '-2.5,-1.4', '-1.4;-2.5', '-1.4,-2.5', '{-1.4,-2.5}', '{-2.5,-1.4}', '-2,5;-1,4', '-1,4;-2,5', '-2.6;-1.5', '-2.6,-1.5', '-1.5;-2.6', '-1.5,-2.6', '{-1.5,-2.6}', '{-2.6,-1.5}', '-2,6;-1,5', '-1,5;-2,6', '-2.5;-1.6', '-2.5,-1.6', '-1.6;-2.5', '-1.6,-2.5', '{-1.6,-2.5}', '{-2.5,-1.6}', '-2,5;-1,6', '-1,6;-2,5', '-2.4;-1.6', '-2.4,-1.6', '-1.6;-2.4', '-1.6,-2.4', '{-1.6,-2.4}', '{-2.4,-1.6}', '-2,4;-1,6', '-1,6;-2,4', '-2.6;-1.4', '-2.6,-1.4', '-1.4;-2.6', '-1.4,-2.6', '{-1.4,-2.6}', '{-2.4,-1.6}', '-2,4;-1,6', '-1,4;-2,6', '-7/5;-5/2', '-7/5,-5/2', '-5/2;-7/5', '-5/2,-7/5', '{-7/5,-5/2}', '{-5/2,-7/5}', '-7/5;-13/5', '-7/5,-13/5', '-13/5;-7/5', '-13/5,-7/5', '{-7/5,-13/5}', '{-13/5,-7/5}', '-3/2;-12/5', '-3/2,-12/5', '-12/5;-3/2', '-12/5,-3/2', '{-3/2,-12/5}', '{-12/5,-3/2}', '-3/2;-13/5', '-3/2,-13/5', '-13/5;-3/2', '-13/5,-3/2', '{-3/2,-13/5}', '{-13/5,-3/2}', '-8/5;-12/5', '-8/5,-12/5', '-12/5;-8/5', '-12/5,-8/5', '{-8/5,-12/5}', '{-12/5,-8/5}', '-8/5;-5/2', '-8/5,-5/2', '-5/2;-8/5', '-5/2,-8/5', '{-8/5,-5/2}', '{-5/2,-8/5}']
//   //'-2.5' ; '-1.5', {-2.5 , -1.5}          -3/2', '-1.5', '-7/5', '-1.4', '-8/5', '-1.6'                                                                                                                                                                                                                                                                                                                   '-7/5', '-1.4',   -12/5=2.4                                   {'-8/5'= '-1.6'    ,    -13/5= 2.6                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           '-7/5', '-1.4',   -5/2=2.5                                                          '-7/5', '-1.4',   -13/5=2.6                                      '-3/2'=1.5   -12/5=2.4                                                 '-3/2'=1.5   -13/5=2.6                                         -8/5 = 1.6        -12/5 = 2.4                                    -8/5 = 1.6        -5/2 = 2.5
// }];

//BOTON   ∄	(SIMBOLO de "NO EXISTE")

// btnNotExist1.addEventListener('click', function () {
//   if (inputActiveTable1) {
//     document.querySelector(`#${inputActiveTable1}`).value = "∄";
//   }
// });
// btnNotExist2.addEventListener('click', function () {
//   if (inputActiveTable2) {
//     document.querySelector(`#${inputActiveTable2}`).value = "∄";
//   }
// });
// inputsTable1.forEach(function (input) {
//   input.addEventListener('focus', function () {
//     inputActiveTable1 = input.id;
//   });
// });
// inputsTable2.forEach(function (input) {
//   input.addEventListener('focus', function () {
//     inputActiveTable2 = input.id;
//   });
// });

//VALIDAR

// btnValidate1.addEventListener('click', function () {
//   var inputs = document.querySelectorAll('.input-table1');
//   var dataInteraction = [];
//   inputs.forEach(function (input) {
//     dataInteraction.push({
//       name: input.id,
//       value: input.value
//     });
//     var successValues = successResponse.find(function (object) {
//       return object.idInput === input.id;
//     });
//     var inputValue = input.value.trim().toLowerCase().replaceAll(' ', '').replaceAll('y', ';');
//     if (successValues.responses.includes(inputValue)) {
//       countersTable1.respCorrect += 1;
//       document.querySelector(`#${input.id}`).classList.remove("input_invalid");
//       document.querySelector(`#${input.id}`).classList.add("input_valid");
//     } else {
//       countersTable1.respIncorrect += 1;
//       document.querySelector(`#${input.id}`).classList.remove("input_valid");
//       document.querySelector(`#${input.id}`).classList.add("input_invalid");
//     }
//   });
//   // console.log("correctas:" , countersTable1.respCorrect, "incorrectas:", countersTable1.respIncorrect);
//   //    console.log(cleanData('artifact_1', countersTable1.respCorrect, countersTable1.respIncorrect))
//   sendData(createData({
//     artifactType: "Standard",
//     artifactName: 1,
//     respCorrect: countersTable1.respCorrect,
//     respIncorrect: countersTable1.respIncorrect,
//     useElementArtifact: true,
//     inputsValues: dataInteraction
//   }));
//   countersTable1.respCorrect = 0;
//   countersTable1.respIncorrect = 0;
// });
// btnValidate2.addEventListener('click', function () {
//   var inputs = document.querySelectorAll('.input-table2');
//   var dataInteraction = [];
//   inputs.forEach(function (input) {
//     dataInteraction.push({
//       name: input.id,
//       value: input.value
//     });
//     var successValues = successResponse2.find(function (object) {
//       return object.idInput === input.id;
//     });
//     var inputValue = input.value.trim().toLowerCase().replaceAll(' ', '').replaceAll('y', ';');
//     if (successValues.responses.includes(inputValue)) {
//       countersTable2.respCorrect += 1;
//       document.querySelector(`#${input.id}`).classList.remove("input_invalid");
//       document.querySelector(`#${input.id}`).classList.add("input_valid");
//     } else {
//       countersTable2.respIncorrect += 1;
//       document.querySelector(`#${input.id}`).classList.remove("input_valid");
//       document.querySelector(`#${input.id}`).classList.add("input_invalid");
//     }
//   });
//   // console.log("correctas:" , countersTable2.respCorrect, "incorrectas:", countersTable2.respIncorrect);
//   //    console.log(cleanData('artifact_2', countersTable2.respCorrect, countersTable2.respIncorrect));
//   sendData(createData({
//     artifactType: "Standard",
//     artifactName: 2,
//     respCorrect: countersTable2.respCorrect,
//     respIncorrect: countersTable2.respIncorrect,
//     useElementArtifact: true,
//     inputsValues: dataInteraction
//   }));
//   countersTable2.respCorrect = 0;
//   countersTable2.respIncorrect = 0;
// });

// //RESET

// btnReset1.addEventListener('click', function () {
//   var inputs = document.querySelectorAll('.input-table1');
//   inputs.forEach(function (input) {
//     input.value = '';
//     document.querySelector(`#${input.id}`).classList.remove("input_invalid");
//     document.querySelector(`#${input.id}`).classList.remove("input_valid");
//   });
// });
// btnReset2.addEventListener('click', function () {
//   var inputs = document.querySelectorAll('.input-table2');
//   inputs.forEach(function (input) {
//     input.value = '';
//     document.querySelector(`#${input.id}`).classList.remove("input_invalid");
//     document.querySelector(`#${input.id}`).classList.remove("input_valid");
//   });
// });
// btnValidate3.addEventListener('click', function () {
//   var inputs = document.querySelectorAll('.input-board-11');
//   var dataInteraction = [];
//   inputs.forEach(function (input) {
//     dataInteraction.push({
//       name: input.id,
//       value: input.value
//     });
//     document.querySelector(`#${input.id}`).classList.remove("input_default");
//     document.querySelector(`#${input.id}`).classList.add("input-sended");
//   });
//   //    console.log(cleanDataForm('artifact_3', dataInteraction))
//   sendData(createData({
//     artifactType: "Yellow",
//     artifactName: 3,
//     comments: dataInteraction,
//     useElementArtifact: true,
//     inputsValues: dataInteraction
//   }));
// });
// btnReset3.addEventListener('click', function () {
//   var inputs = document.querySelectorAll('.input-board-11');
//   inputs.forEach(function (input) {
//     input.value = '';
//     document.querySelector(`#${input.id}`).classList.remove("input-sended");
//     document.querySelector(`#${input.id}`).classList.add("input_default");
//   });
// });
// function createData(_ref) {
//   var artifactType = _ref.artifactType,
//     artifactName = _ref.artifactName,
//     _ref$respCorrect = _ref.respCorrect,
//     respCorrect = _ref$respCorrect === void 0 ? 0 : _ref$respCorrect,
//     _ref$respIncorrect = _ref.respIncorrect,
//     respIncorrect = _ref$respIncorrect === void 0 ? 0 : _ref$respIncorrect,
//     _ref$comments = _ref.comments,
//     comments = _ref$comments === void 0 ? null : _ref$comments,
//     _ref$useElementArtifa = _ref.useElementArtifact,
//     useElementArtifact = _ref$useElementArtifa === void 0 ? false : _ref$useElementArtifa,
//     _ref$inputsValues = _ref.inputsValues,
//     inputsValues = _ref$inputsValues === void 0 ? null : _ref$inputsValues;
//   var data = {
//     typeArtifact: artifactType,
//     artifact: artifactName,
//     results: {
//       correct: respCorrect,
//       incorrect: respIncorrect
//     }
//   };
//   if (comments) {
//     data.comments = {};
//     comments.forEach(function (field) {
//       data.comments[field.name] = field.value;
//     });
//   }
//   if (useElementArtifact) {
//     data.elementArtifact = {
//       inputsValues: {}
//     };
//     inputsValues.forEach(function (input) {
//       data.elementArtifact.inputsValues[input.name] = input.value;
//     });
//   }
//   return data;
// }

// function cleanDataForm (artifactName, inputFields) {
//     console.log(inputFields);
//     const data = {
//         [artifactName]: {},
//     }
//     inputFields.forEach((field) => {
//         data[artifactName][field.name] = field.value
//     })
//     return data
// }

// function cleanData(artifactName, respCorrect, respIncorrect) {
//     const data = {
//         [artifactName]: {
//             respCorrect: respCorrect,
//             respIncorrect: respIncorrect,
//         }
//     }

//     return data
// }

let validar = document.querySelectorAll('.check');
let intentos1, intentos2;
let tds = document.querySelectorAll('tbody');;
let inputElement;
let mathvalues;
for (let i = 0; i < validar.length; i++) {
    // Add a click event listener to each element
    validar[i].addEventListener('click', function() {
        // Print a different message depending on the element
        switch (this) {
            case validar[0]:
                intentos1++;
                const selectElement = tds[0].querySelectorAll('select');
                const selectedValues = [];
                for(let j=0;j<selectElement.length;j++){
                    const selectedOption = selectElement[j].querySelector('option:checked');
                    const selectedValue = selectedOption.value;
                    selectedValues.push(selectedValue);
                }
                localStorage.setItem('selectedValues', JSON.stringify(selectedValues));
                inputElement = tds[0].querySelectorAll('math-field');
                mathvalues = [];
                for(let j=0;j<inputElement.length;j++){
                    const inputValue = inputElement[j].value;
                    mathvalues.push(inputValue);
                    // Store or use the value
                }
                localStorage.setItem('mathValuesA', JSON.stringify(mathvalues));
                localStorage.setItem('P1_Intentos1',intentos1);                
                break;
            case validar[1]:
                intentos2++;
                inputElement = tds[1].querySelectorAll('math-field');
                mathvalues = [];
                for(let j=0;j<inputElement.length;j++){
                    const inputValue = inputElement[j].value;
                    mathvalues.push(inputValue);
                    // Store or use the value
                }
                localStorage.setItem('mathValuesB', JSON.stringify(mathvalues));
                localStorage.setItem('P1_Intentos2',intentos2);
                break;        
        }
    });
}

let resets = document.querySelectorAll('.reset');
for (let i = 0; i < resets.length; i++) {
    // Add a click event listener to each element
    resets[i].addEventListener('click', function() {
        switch (this) {
            case resets[0]:
                const selected = JSON.parse(localStorage.getItem('selectedValues'));
                const mathValues = JSON.parse(localStorage.getItem('mathValuesA'));
                if (mathValues) {
                    localStorage.removeItem('mathValuesA');                    
                } 
                if (selected) {
                    localStorage.removeItem('selectedValues');
                }                
                break;
            case resets[1]:
                const mathValuesB = JSON.parse(localStorage.getItem('mathValuesB'));
                if (mathValuesB) {
                    localStorage.removeItem('mathValuesB')
                }
                break;        
        }
    });
}

window.addEventListener('load', function() {
    const tbodyElement = document.querySelectorAll('tbody');
    const selectElements = tbodyElement[0].querySelectorAll('select');
    const selectedValues = JSON.parse(localStorage.getItem('selectedValues'));
    if (selectedValues) {
        for (let i = 0; i < selectElements.length; i++) {
            const selectedValue = selectedValues[i];
            const selectedOption = selectElements[i].querySelector(`option[value="${selectedValue}"]`);
            selectedOption.selected = true;
        }
    }
    const mathFieldElements = tbodyElement[0].querySelectorAll('math-field');
    const mathFieldElementsB = tbodyElement[1].querySelectorAll('math-field');
    const mathValues = JSON.parse(localStorage.getItem('mathValuesA'));
    const mathValuesB = JSON.parse(localStorage.getItem('mathValuesB'));
    if (mathValues) {
        for (let i = 0; i < mathFieldElements.length; i++) {
            mathFieldElements[i].value = mathValues[i];
        }
    }
    if (mathValues) {
        for (let i = 0; i < mathFieldElementsB.length; i++) {
            mathFieldElementsB[i].value = mathValuesB[i];
        }
    }
    const intentos1_LS = localStorage.getItem('P1_Intentos1');
    const intentos2_LS = localStorage.getItem('P1_Intentos2');
    if (intentos1_LS)
        intentos1 = intentos1_LS
    else
        intentos1 = 0;
    if (intentos2_LS)
        intentos2 = intentos2_LS
    else
        intentos2 = 0;
});