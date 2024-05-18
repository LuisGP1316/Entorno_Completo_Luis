
const defBoards = {
    board_1: {
      style: {
        axis: [false, true, true],
        valueAxis: {
          yd: [[0, 0],
          [0, 1],],
          yp: [-3, -2, -1, 1, 2, 3],
          yv: ['-3', '-2', '-1', '1', '2', '3'],
          xd: [[0, 0],
          [1, 0],],
        },
        grid: true,
        boundingbox: [-4, 4, 4, -4],
  
      },
  
    },
  }

const def = {

    artifact_Example1: {
  
      variableX: '7',
      buttonsActive: false,
      characteristicsArtifact: {
        typeForm: 'artifactGrid',
        width: '250px',
        height: 'auto',
        arrow: {
          count: 1,
          direction: 'down'
        },
        typeDiv: [
          {
            rounded: {
              count: 2,
              border: '1px solid black',
              formClas: 'rounded',
              inputEnable: true,
              size: {
                width: '150px',
                height: '50px'
              }
            }
          },
          {
            square: {
              count: 1,
              border: '1px solid black',
              formClas: 'square',
              inputEnable: true,
              size: {
                width: '100px',
                height: '50px'
              }
            }
          }
        ]
      },
      defaultinput: {
        screen: { defaultText: [{ textValue: 'n', disabled: true }, { textValue: 'cos(n)', disabled: true }] },
        key: { defaultText: [{ textValue: 'cos()}' }], disabled: true }
      },
      conditions: {
        screen: [[], [], []],
        //    key: []
      }
    },
  }

  
  const defQuiz = {
    artifact_1: {
      quizType: "table",
      rendering: "rendering_1",
      // config: "procedural",
      // title: "Hola",
      keyBoardProfile: ["numeric", "functions",],

      quiz: {
  
        cells:
          [
            [// row
              {//cell
                nodes:
                  [
                    {
                      type: "text",
                      data: "Tecla",
                    }
                  ]
              },
              {
                nodes:
                  [
                    /* {
                      type: "mathfield",
                      data: {
                        placeholder:`\\cos\\left(\\placeholder[value]{}\\right)`,
                        condition: {
                          value: "x"
                        },
                        questionType: "basic"
                      }
                    }, */
                    {
                      //tipo de pregunta
                      type: "mathfield",
                      //label,Answer,Validation
                      data: {
                          label: "",
                          condition: ["cosleft(placeholder{}right)","cosleft(right)" ],
                          questionType: "expression"
                      }
                  },
                  ]
              },
            ],
            [// row
              {//cell
                nodes:
                  [
                    {
                      //tipo de pregunta
                      type: "text",
                      //label,Answer,Validation
                      data: "Notación funcional",
                      formato: {
  
                      }
                    }
  
  
  
                  ]
              },
  
              {
                nodes:
                  [
                    {
                      //tipo de pregunta
                      type: "mathfield",
                      //label,Answer,Validation
                      data: {
                        placeholder: `f(x)=\\placeholder[value]{}`,
                        condition: {
                          value: 'cosleft(xright)'
                        },
                        questionType: "expression"
                      }
  
                    },
  
  
  
                  ]
              },
  
            ],
            [// row
              {//cell
                nodes:
                  [
                    {
                      //tipo de pregunta
                      type: "text",
                      //label,Answer,Validation
                      data: "Ecuación en dos variables",
                      formato: {
  
                      }
                    }
  
  
  
                  ]
              },
  
              {
                nodes:
                  [
                    {
                      //tipo de pregunta
                      type: "mathfield",
                      //label,Answer,Validation
                      data: {
                        placeholder: `y=\\placeholder[value]{}`,
                        condition: {
                            value: 'cosleft(xright)'

                          // value2:1,
                          // value3:1
  
                        },
                        questionType: "expression"
                      }
  
  
  
                    },
  
  
  
                  ]
              },
  
            ],
  
            [// row
                        {//cell
                            nodes:
                                [
                                    {
                                        //tipo de pregunta
                                        type: "text",
                                        //label,Answer,Validation
                                        data: "Pares ordenados",
                                        formato: {

                                        }
                                    }



                                ]
                        },

                        {
                            nodes:
                                [
                                    {
                                        //tipo de pregunta
                                        type: "text",
                                        //label,Answer,Validation
                                        data: `(x,cos(x))`,
                                        formato: {

                                        }
                                    }
                 


                                ]
                        },
                 
                    ],
  
  
  
  
  
          
  
          ],
  
      }
  
    },
    artifact_3: {
      quizType: "standard",
      rendering: "rendering_questions",
      keyBoardProfile: ["numeric", "functions",],

      quiz: {
        generalLayout: "",
        formsQuestions: [
      
          {
            layout: "horizontal",
            nodes:
              [
                {
                  //tipo de pregunta
                  type: "radio",
                  //label,Answer,Validation
                  data: {
                    label: `¿Es cierto que cos(x)=-cos(-x)?`,
                    condition: 0,
                    optionList:
                      [
  
                        "Sí",
                        "No",
  
                      ],
                    questionType: "expression"
                  }
  
  
  
                },
  
  
  
  
              ]
          },
          {
            layout: "horizontal",
            nodes:
              [
                {
                  //tipo de pregunta
                  type: "radio",
                  //label,Answer,Validation
                  data: {
                    label: `¿Par o impar?`,
                    condition: 0,
                    optionList:
                      [
  
                        "Par",
                        "Impar",
  
                      ],
                    questionType: "expression"
                  }
  
  
  
                },
  
  
  
  
              ]
          },
        ],
      }
    },
    artifact_4: {
      quizType: "standard",
      rendering: "rendering_2",
      keyBoardProfile: ["numeric", "functions",],

      quiz: {
        generalLayout: "",
        formsQuestions: [
          {
            layout: "horizontal",
            nodes:
              [
                {
                  //tipo de pregunta
                  type: "mathfield",
                  //label,Answer,Validation
                  data: {
                    label: "Dominio:",
                    condition: ['left(-infty,inftyright)'],
  
                    questionType: "expression"
                  }
                },
                {
                  //tipo de pregunta
                  type: "mathfield",
                  //label,Answer,Validation
                  data: {
                    label: "Rango:",
                    condition:["leftlbrack-1,1rightrbrack"],
                    questionType: 'expression'
                  },

                  

                },
              ]
          },
          {
            layout: "horizontal",
            nodes:
              [
               /*  {
                  //tipo de pregunta
                  type: "mathfield",
                  //label,Answer,Validation
                  data: {
                    label: "Cortes en el eje X:",
                    condition: ["left(-frac{pi}{2},0right),left(frac{pi}{2},0right)","left(-frac{pi}{2},0right);left(frac{pi}{2},0right)"],
                    questionType: "expression"
                  }
                }, */

                {
                  //tipo de pregunta
                  type: "mathfield",
                  placeholder: `\\ldots\\left(\\placeholder[value1]{},\\placeholder[value2]{}\\right)\\cup\\left(\\placeholder[value3]{},\\placeholder[value4]{}\\right)\\ldots`,

                  data: {
                      label: "Cortes con el eje X",
                      condition:{
value1:["-frac{pi}{2}"],
value2:"0",
value3:"frac{pi}{2}",
value4:"0",
                      } ,

                      questionType: "expression"
                  }
              },
              {
                  //tipo de pregunta
                  type: "mathfield",
                  //label,Answer,Validation
                  data: {
                    label: "Cortes en el eje Y:",
                    condition: ["left(0,1right)"],
                    questionType: "expression"
                  }
                },
    
              ]
          },
  
        ],
      }
    },
    artifact_5: {
      quizType: "standard",
      rendering: "rendering_3",
      keyBoardProfile: ["numeric", "functions"],

      quiz: {
        generalLayout: "",
        formsQuestions: [
          {
            layout: "horizontal",
            nodes:
              [
                {
                  //tipo de pregunta
                  type: "mathfield",
                  //label,Answer,Validation
                  data: {
                    label: "Máximo absoluto:",
                    condition: ['1'],
  
                    questionType: "expression"
                  }
                },
               /*  {
                  //tipo de pregunta
                  type: "mathfield",
                  //label,Answer,Validation
                  data: {
                    label: "Alcanzado en:",
                    condition: ["0"],
                    questionType: 'expression'
                  }
                }, */
                {
                  //tipo de pregunta
                  type: "mathfield",
                  placeholder: `\\ldots\\placeholder[value1]{},\\ldots`,

                  data: {
                      label: "Alcanzado en:",
                      condition:{
value1:"0",
                      } ,

                      questionType: "expression"
                  }



              },
              ]
          },
          {
            layout: "horizontal",
            nodes:
              [
                {
                  //tipo de pregunta
                  type: "mathfield",
                  //label,Answer,Validation
                  data: {
                    label: "Mínimo absoluto:",
                    condition: ["-1"],
                    questionType: "expression"
                  }
  
  
                },
     
                {
                  //tipo de pregunta
                  type: "mathfield",
                  placeholder: `\\ldots\\placeholder[value1]{},\\placeholder[value2]{}\\ldots`,

                  data: {
                      label: "Alcanzado en:",
                      condition:{
value1:"-pi",
value2:"pi",
                      } ,

                      questionType: "expression"
                  }



              },
  
  
              ]
          },
  
        ],
      }
    },
    artifact_6: {
      quizType: "standard",
      rendering: "rendering_4",
      keyBoardProfile: ["numeric", "functions",],

      quiz: {
        generalLayout: "",
        formsQuestions: [
          {
            layout: "horizontal",
            nodes:
              [
                {
                  //tipo de pregunta
                  type: "mathfield",
                  //label,Answer,Validation
                  data: {
                    label: "Puntos máximos No absolutos:",
                    condition: ['nexists'],
  
                    questionType: "expression"
                  }
                },
              ]
          },
          {
            layout: "horizontal",
            nodes:
              [
                {
                  //tipo de pregunta
                  type: "mathfield",
                  //label,Answer,Validation
                  data: {
                    label: "Puntos mínimos No absolutos:",
                    condition: ["nexists"],
                    questionType: "expression"
                  }
                },
              ]
          },
  
        ],
      }
    },
    artifact_7: {
      quizType: "standard",
      rendering: "rendering_5",
      keyBoardProfile: ["numeric", "functions",],

      quiz: {
        generalLayout: "",
        formsQuestions: [
          {
            layout: "horizontal",
            nodes:
              [
           /*      {
                  //tipo de pregunta
                  type: "mathfield",
                  //label,Answer,Validation
                  data: {
                    label: "Zonas de crecimiento:",
                    condition: ['left(-pi,0right)'],
  
                    questionType: "expression"
                  }
                },
 */

                {
                  //tipo de pregunta
                  type: "mathfield",
                  placeholder: `\\ldots\\left(\\placeholder[value1]{},\\placeholder[value2]{}\\right)\\ldots`,


                  data: {
                    label: "Zonas de crecimiento:",
                      condition:{
                        value1:"-pi",
                        value2:"0",


                      } ,

                      questionType: "expression"
                  }

              },

        /*         {
                  //tipo de pregunta
                  type: "mathfield",
                  //label,Answer,Validation
                  data: { 
                    label: "Zonas de decrecimiento:",
                    condition: ['left(0,piright)'],
                    questionType: 'expression'
                  }
                },
 */
                {
                  //tipo de pregunta
                  type: "mathfield",
                  placeholder: `\\ldots\\left(\\placeholder[value1]{},\\placeholder[value2]{}\\right)\\ldots`,


                  data: {
                    label: "Zonas de decrecimiento:",
                      condition:{
value1:"0",
value2:"pi",

                      } ,

                      questionType: "expression"
                  }



              },
              ]
          },
          {
            layout: "horizontal",
            nodes:
              [
            /*     {
                  //tipo de pregunta
                  type: "mathfield",
                  //label,Answer,Validation
                  data: {
                    label: "Partes positivas:",
                    condition: ["left(-frac{pi}{2},frac{pi}{2}right)"],
                    questionType: "expression"
                  }
  
                  
  
                }, */

                {
                  //tipo de pregunta
                  type: "mathfield",
                  placeholder: `\\ldots\\left(\\placeholder[value1]{},\\placeholder[value2]{}\\right)\\ldots`,

                  data: {
                      label: "Partes positivas",
                      condition:{
value1:"-frac{pi}{2}",
value2:"frac{pi}{2}",
                      } ,

                      questionType: "expression"
                  }



              },
    /*             {
                  //tipo de pregunta
                  type: "mathfield",
                  //label,Answer,Validation
                  data: {
                    label: "Partes negativas:",
                    condition: ["left(-pi,-frac{pi}{2}right)cupleft(frac{pi}{2},piright)"],
                    questionType: "expression"
                  }
  
  
  
                }, */
                
                {
                  //tipo de pregunta
                  type: "mathfield",
                  placeholder: `\\ldots\\left(\\placeholder[value1]{},\\placeholder[value2]{}\\right)\\cup\\left(\\placeholder[value3]{},\\placeholder[value4]{}\\right)\\ldots`,

                  data: {
                      label: "Partes positivas",
                      condition:{
value1:"-pi",
value2:"2",
value3:"frac{pi}{2}",
value:'4'
                      } ,

                      questionType: "expression"
                  }



              },
  
  
              ]
          },
  
        ],
      }
    },
  }  
  const defAlphabet =
{

  artifact_2: {
    buttonsActive: {
      curve: true
    },
    conditions: {
      alphabetDiagram: {

        mathEcuation: "cos(x)", //Curva a crear utiliza las expresiones de mathjs
        expression: '\\cos\\left(x\\right)',
        xCoords: [
          [

                       { xCoord: -3.14, axisText: "-\\pi"}, { xCoord: -1.57, axisText: "-\\frac{\\pi}{2}"} ,0,{ xCoord: 1.57, axisText: "\\frac{\\pi}{2}"},{ xCoord: 3.14, axisText: "\\pi"}
          ],

        ],

      }
    }
  },

}

generateArtifact(def)

const quizGen = new QuizGenerator(defQuiz)
quizGen.generateObject()

new GenerateArtifactsEngineAlphabet(defAlphabet, defBoards)
