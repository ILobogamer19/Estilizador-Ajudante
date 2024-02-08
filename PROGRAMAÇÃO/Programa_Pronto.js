////---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//#region _Pré_ _Carregamento_ Principal
Pre_Carregamento_Necessario();
//#endregion _Pré_ _Carregamento_ Principal
////---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//#region _Variavel_ Principal

//#region _Variavel_ Variavel de rgb para nome de cor
var Nome_Cor_RGB = {
  "rgb(240, 248, 255)": "aliceblue",
  "rgb(250, 235, 215)": "antiquewhite",
  "rgb(0, 255, 255)": "aqua",
  "rgb(127, 255, 212)": "aquamarine",
  "rgb(240, 255, 255)": "azure",
  "rgb(245, 245, 220)": "beige",
  "rgb(255, 228, 196)": "bisque",
  "rgb(0, 0, 0)": "black",
  "rgb(255, 235, 205)": "blanchedalmond",
  "rgb(0, 0, 255)": "blue",
  "rgb(138, 43, 226)": "blueviolet",
  "rgb(165, 42, 42)": "brown",
  "rgb(222, 184, 135)": "burlywood",
  "rgb(95, 158, 160)": "cadetblue",
  "rgb(127, 255, 0)": "chartreuse",
  "rgb(210, 105, 30)": "chocolate",
  "rgb(255, 69, 0)": "coral",
  "rgb(100, 149, 237)": "cornflowerblue",
  "rgb(255, 248, 220)": "cornsilk",
  "rgb(220, 20, 60)": "crimson",
  "rgb(0, 255, 255)": "cyan",
  "rgb(0, 0, 139)": "darkblue",
  "rgb(0, 139, 139)": "darkcyan",
  "rgb(184, 134, 11)": "darkgoldenrod",
  "rgb(169, 169, 169)": "darkgray",
  "rgb(0, 100, 0)": "darkgreen",
  "rgb(189, 183, 107)": "darkkhaki",
  "rgb(139, 0, 139)": "darkmagenta",
  "rgb(85, 107, 47)": "darkolivegreen",
  "rgb(255, 140, 0)": "darkorange",
  "rgb(153, 50, 204)": "darkorchid",
  "rgb(139, 0, 0)": "darkred",
  "rgb(233, 150, 122)": "darksalmon",
  "rgb(143, 188, 143)": "darkseagreen",
  "rgb(72, 61, 139)": "darkslateblue",
  "rgb(47, 79, 79)": "darkslategray",
  "rgb(0, 206, 209)": "darkturquoise",
  "rgb(148, 0, 211)": "darkviolet",
  "rgb(255, 20, 147)": "deeppink",
  "rgb(0, 191, 255)": "deepskyblue",
  "rgb(105, 105, 105)": "dimgray",
  "rgb(30, 144, 255)": "dodgerblue",
  "rgb(178, 34, 34)": "firebrick",
  "rgb(255, 250, 240)": "floralwhite",
  "rgb(34, 139, 34)": "forestgreen",
  "rgb(255, 0, 255)": "fuchsia",
  "rgb(220, 220, 220)": "gainsboro",
  "rgb(248, 248, 255)": "ghostwhite",
  "rgb(255, 215, 0)": "gold",
  "rgb(218, 165, 32)": "goldenrod",
  "rgb(128, 128, 128)": "gray",
  "rgb(0, 128, 0)": "green",
  "rgb(173, 255, 47)": "greenyellow",
  "rgb(240, 255, 240)": "honeydew",
  "rgb(255, 105, 180)": "hotpink",
  "rgb(205, 92, 92)": "indianred",
  "rgb(75, 0, 130)": "indigo",
  "rgb(255, 255, 240)": "ivory",
  "rgb(240, 230, 140)": "khaki",
  "rgb(230, 230, 250)": "lavender",
  "rgb(255, 240, 245)": "lavenderblush",
  "rgb(124, 252, 0)": "lawngreen",
  "rgb(255, 250, 205)": "lemonchiffon",
  "rgb(173, 216, 230)": "lightblue",
  "rgb(240, 128, 128)": "lightcoral",
  "rgb(224, 255, 255)": "lightcyan",
  "rgb(250, 250, 210)": "lightgoldenrodyellow",
  "rgb(211, 211, 211)": "lightgray",
  "rgb(144, 238, 144)": "lightgreen",
  "rgb(255, 182, 193)": "lightpink",
  "rgb(255, 160, 122)": "lightsalmon",
  "rgb(32, 178, 170)": "lightseagreen",
  "rgb(135, 206, 250)": "lightskyblue",
  "rgb(119, 136, 153)": "lightslategray",
  "rgb(176, 196, 222)": "lightsteelblue",
  "rgb(255, 255, 224)": "lightyellow",
  "rgb(0, 255, 0)": "lime",
  "rgb(50, 205, 50)": "limegreen",
  "rgb(250, 240, 230)": "linen",
  "rgb(255, 0, 255)": "magenta",
  "rgb(128, 0, 0)": "maroon",
  "rgb(102, 205, 170)": "mediumaquamarine",
  "rgb(0, 0, 205)": "mediumblue",
  "rgb(186, 85, 211)": "mediumorchid",
  "rgb(147, 112, 219)": "mediumpurple",
  "rgb(60, 179, 113)": "mediumseagreen",
  "rgb(123, 104, 238)": "mediumslateblue",
  "rgb(0, 250, 154)": "mediumspringgreen",
  "rgb(72, 209, 204)": "mediumturquoise",
  "rgb(199, 21, 133)": "mediumvioletred",
  "rgb(25, 25, 112)": "midnightblue",
  "rgb(245, 255, 250)": "mintcream",
  "rgb(255, 228, 225)": "mistyrose",
  "rgb(255, 228, 181)": "moccasin",
  "rgb(255, 222, 173)": "navajowhite",
  "rgb(0, 0, 128)": "navy",
  "rgb(253, 245, 230)": "oldlace",
  "rgb(128, 128, 0)": "olive",
  "rgb(107, 142, 35)": "olivedrab",
  "rgb(255, 165, 0)": "orange",
  "rgb(255, 69, 0)": "orangered",
  "rgb(218, 112, 214)": "orchid",
  "rgb(238, 232, 170)": "palegoldenrod",
  "rgb(152, 251, 152)": "palegreen",
  "rgb(175, 238, 238)": "paleturquoise",
  "rgb(219, 112, 147)": "palevioletred",
  "rgb(255, 239, 213)": "papayawhip",
  "rgb(255, 218, 185)": "peachpuff",
  "rgb(205, 133, 63)": "peru",
  "rgb(255, 192, 203)": "pink",
  "rgb(221, 160, 221)": "plum",
  "rgb(176, 224, 230)": "powderblue",
  "rgb(128, 0, 128)": "purple",
  "rgb(255, 0, 0)": "red",
  "rgb(188, 143, 143)": "rosybrown",
  "rgb(65, 105, 225)": "royalblue",
  "rgb(139, 69, 19)": "saddlebrown",
  "rgb(250, 128, 114)": "salmon",
  "rgb(244, 164, 96)": "sandybrown",
  "rgb(46, 139, 87)": "seagreen",
  "rgb(255, 245, 238)": "seashell",
  "rgb(160, 82, 45)": "sienna",
  "rgb(192, 192, 192)": "silver",
  "rgb(135, 206, 235)": "skyblue",
  "rgb(106, 90, 205)": "slateblue",
  "rgb(112, 128, 144)": "slategray",
  "rgb(255, 250, 250)": "snow",
  "rgb(0, 255, 127)": "springgreen",
  "rgb(70, 130, 180)": "steelblue",
  "rgb(210, 180, 140)": "tan",
  "rgb(0, 128, 128)": "teal",
  "rgb(216, 191, 216)": "thistle",
  "rgb(255, 99, 71)": "tomato",
  "rgba(255, 255, 255, 0)": "transparent",
  "rgb(64, 224, 208)": "turquoise",
  "rgb(238, 130, 238)": "violet",
  "rgb(245, 222, 179)": "wheat",
  "rgb(255, 255, 255)": "white",
  "rgb(245, 245, 245)": "whitesmoke",
  "rgb(255, 255, 0)": "yellow",
  "rgb(154, 205, 50)": "yellowgreen",
};
//#endregion _Variavel_

//#region _Variavel_ Variavel de hexadecimal para nome de cor
var Nome_Cor_Hexadecimal = {
  "#f0f8ff": "aliceblue",
  "#faebd7": "antiquewhite",
  "#00ffff": "aqua",
  "#7fffd4": "aquamarine",
  "#f0ffff": "azure",
  "#f5f5dc": "beige",
  "#ffe4c4": "bisque",
  "#000000": "black",
  "#ffebcd": "blanchedalmond",
  "#0000ff": "blue",
  "#8a2be2": "blueviolet",
  "#a52a2a": "brown",
  "#deb887": "burlywood",
  "#5f9ea0": "cadetblue",
  "#7fff00": "chartreuse",
  "#d2691e": "chocolate",
  "#ff7f50": "coral",
  "#6495ed": "cornflowerblue",
  "#fff8dc": "cornsilk",
  "#dc143c": "crimson",
  "#00ffff": "cyan",
  "#00008b": "darkblue",
  "#008b8b": "darkcyan",
  "#b8860b": "darkgoldenrod",
  "#a9a9a9": "darkgray",
  "#006400": "darkgreen",
  "#bdb76b": "darkkhaki",
  "#8b008b": "darkmagenta",
  "#556b2f": "darkolivegreen",
  "#ff8c00": "darkorange",
  "#9932cc": "darkorchid",
  "#8b0000": "darkred",
  "#e9967a": "darksalmon",
  "#8fbc8f": "darkseagreen",
  "#483d8b": "darkslateblue",
  "#2f4f4f": "darkslategray",
  "#00ced1": "darkturquoise",
  "#9400d3": "darkviolet",
  "#ff1493": "deeppink",
  "#00bfff": "deepskyblue",
  "#696969": "dimgray",
  "#1e90ff": "dodgerblue",
  "#b22222": "firebrick",
  "#fffaf0": "floralwhite",
  "#228b22": "forestgreen",
  "#ff00ff": "fuchsia",
  "#dcdcdc": "gainsboro",
  "#f8f8ff": "ghostwhite",
  "#ffd700": "gold",
  "#daa520": "goldenrod",
  "#808080": "gray",
  "#008000": "green",
  "#adff2f": "greenyellow",
  "#f0fff0": "honeydew",
  "#ff69b4": "hotpink",
  "#cd5c5c": "indianred",
  "#4b0082": "indigo",
  "#fffff0": "ivory",
  "#f0e68c": "khaki",
  "#e6e6fa": "lavender",
  "#fff0f5": "lavenderblush",
  "#7cfc00": "lawngreen",
  "#fffacd": "lemonchiffon",
  "#add8e6": "lightblue",
  "#f08080": "lightcoral",
  "#e0ffff": "lightcyan",
  "#fafad2": "lightgoldenrodyellow",
  "#d3d3d3": "lightgray",
  "#90ee90": "lightgreen",
  "#ffb6c1": "lightpink",
  "#ffa07a": "lightsalmon",
  "#20b2aa": "lightseagreen",
  "#87cefa": "lightskyblue",
  "#778899": "lightslategray",
  "#b0c4de": "lightsteelblue",
  "#ffffe0": "lightyellow",
  "#00ff00": "lime",
  "#32cd32": "limegreen",
  "#faf0e6": "linen",
  "#ff00ff": "magenta",
  "#800000": "maroon",
  "#66cdaa": "mediumaquamarine",
  "#0000cd": "mediumblue",
  "#ba55d3": "mediumorchid",
  "#9370db": "mediumpurple",
  "#3cb371": "mediumseagreen",
  "#7b68ee": "mediumslateblue",
  "#00fa9a": "mediumspringgreen",
  "#48d1cc": "mediumturquoise",
  "#c71585": "mediumvioletred",
  "#191970": "midnightblue",
  "#f5fffa": "mintcream",
  "#ffe4e1": "mistyrose",
  "#ffe4b5": "moccasin",
  "#ffdead": "navajowhite",
  "#000080": "navy",
  "#fdf5e6": "oldlace",
  "#808000": "olive",
  "#6b8e23": "olivedrab",
  "#ffa500": "orange",
  "#ff4500": "orangered",
  "#da70d6": "orchid",
  "#eee8aa": "palegoldenrod",
  "#98fb98": "palegreen",
  "#afeeee": "paleturquoise",
  "#db7093": "palevioletred",
  "#ffefd5": "papayawhip",
  "#ffdab9": "peachpuff",
  "#cd853f": "peru",
  "#ffc0cb": "pink",
  "#dda0dd": "plum",
  "#b0e0e6": "powderblue",
  "#800080": "purple",
  "#ff0000": "red",
  "#bc8f8f": "rosybrown",
  "#4169e1": "royalblue",
  "#8b4513": "saddlebrown",
  "#fa8072": "salmon",
  "#f4a460": "sandybrown",
  "#2e8b57": "seagreen",
  "#fff5ee": "seashell",
  "#a0522d": "sienna",
  "#c0c0c0": "silver",
  "#87ceeb": "skyblue",
  "#6a5acd": "slateblue",
  "#708090": "slategray",
  "#fffafa": "snow",
  "#00ff7f": "springgreen",
  "#4682b4": "steelblue",
  "#d2b48c": "tan",
  "#008080": "teal",
  "#d8bfd8": "thistle",
  "#ff6347": "tomato",
  "#40e0d0": "turquoise",
  "#ee82ee": "violet",
  "#f5deb3": "wheat",
  "#ffffff": "white",
  "#f5f5f5": "whitesmoke",
  "#ffff00": "yellow",
  "#9acd32": "yellowgreen",
};
//#endregion _Variavel_

//#region _Variavel_ Variavel com todos os nomes dos select
var Modificacoes_Do_Tipo_Select = [
  "Div_display_Valor",
  "Div_justifyContent_Valor",
  "Div_alignItems_Valor",
  "Div_whiteSpace_Valor",
  "Div_position_Valor",
  "Div_overflow_Valor",
  "Div_cursor_Valor",
  "Div_backgroundPosition_Valor",
  "Div_backgroundRepeat_Valor",
  "Div_textAlign_Valor",
  "Div_textTransform_Valor",
  "Div_listStyleType_Valor",
];
//#endregion _Variavel_

//#region _Variavel_ filtros de classes
var Nao_Class = [
  "Pre_Programa_Ajudante",
  "Tipo_Modificador",
  "Tipo_Declaracao",
  "Nome_Modificador",
  "Possiveis_Modificacoes",
  "Div_fontSize",
  "Div_Flex",
  "Div_width",
  "Div_height",
  "Div_margin",
  "Div_padding",
  "Div_top",
  "Div_right",
  "Div_bottom",
  "Div_left",
  "Div_opacity",
  "Div_zIndex",
  "Div_letterSpacing",
  "Div_lineHeight",
  "Div_borderRadius",
  "Div_color",
  "Div_fontFamily",
  "Div_backgroundColor",
  "Div_border",
  "Div_display",
  "Div_justifyContent",
  "Div_alignItems",
  "Div_whiteSpace",
  "Div_position",
  "Div_overflow",
  "Div_cursor",
  "Div_boxShadow",
  "Div_backgroundImage",
  "Div_backgroundPosition",
  "Div_backgroundRepeat",
  "Div_textAlign",
  "Div_textDecoration",
  "Div_textTransform",
  "Div_listStyleType",
  "Div_cssText",
  "Botao_Envio",
  "Estilo_Ajudante_Programação",
  "Programacao_Ajudante_Programacao",
  "Alinhamento_Pre_Ajudante_Programacao",
  "Items_Ocultados_Com_Botao_Oculsao",
  "Items_Ocultados_Com_Botao_Oculsao_2",
  "Botao_Inferior_Direito_Ajudante",
  "Alterar_Setas_Anterior_Proximo",
  "Div_Alterar_Texto_innerHTML",
  "Secao_Testes",
  "Secao_Programa_Ajudante",
  "Div_marginTop",
  "Div_marginRight",
  "Div_marginBottom",
  "Div_marginLeft",
  "Botao_Configuracoes_Personalizadas",
  "Configuracoes_Do_Ajudante_De_Programacao",
  "Lista_Opcoes_Configuracoes_Ajuda_De_Programacao",
  "Sub_Configuracao_Marcar_Area_Que_Vai_Modificar_Ativa",
  "Ajuste_Sub_Configuracao",
  "Botao_Salvar_Configuracoes_Em_Cookies",
  "Fechar_Configuracoes_Ajudante_Programacao",
];
//#endregion _Variavel_

//#region _Variavel_ filtros de id
var Nao_Id = [
  "Tipo_Modificador_Escolhido",
  "Selecao_Aparecer_Selecionado",
  "Tipo_Declaracao_Escolhido",
  "Div_fontSize_Valor",
  "Div_width_Valor",
  "Div_height_Valor",
  "Div_margin_Valor",
  "Div_padding_Valor",
  "Div_top_Valor",
  "Div_right_Valor",
  "Div_bottom_Valor",
  "Div_left_Valor",
  "Div_opacity_Valor",
  "Div_zIndex_Valor",
  "Div_letterSpacing_Valor",
  "Div_lineHeight_Valor",
  "Div_borderRadius_Valor",
  "Div_color_Valor",
  "Div_fontFamily_Valor",
  "Div_backgroundColor_Valor",
  "Div_border_Valor",
  "Div_display_Valor",
  "Div_justifyContent_Valor",
  "Div_alignItems_Valor",
  "Div_whiteSpace_Valor",
  "Div_position_Valor",
  "Div_overflow_Valor",
  "Div_cursor_Valor",
  "Div_boxShadow_Valor",
  "Div_backgroundImage_Valor",
  "Div_backgroundPosition_Valor",
  "Div_backgroundRepeat_Valor",
  "Div_textAlign_Valor",
  "Div_textDecoration_Valor",
  "Div_textTransform_Valor",
  "Div_listStyleType_Valor",
  "Div_cssText_Valor",
  "Botao_Alterar_Visibilidade_Oculto_Desoculto",
  "Div_Alterar_Texto_innerHTML_Valor",
  "Referencia_Para_Abrir_Padroes_De_Limpeza",
  "Div_marginTop_Valor",
  "Div_marginRight_Valor",
  "Div_marginBottom_Valor",
  "Div_marginLeft_Valor",
  "Tipo_De_Configuracao_De_Atualizacao_De_Alteracoes",
  "Tipo_De_Configuracao_De_Input_Cor",
  "Tipo_De_Configuracao_De_Tamanho_Geral",
  "Tipo_De_Configuracao_De_Tipo_De_Fonte_Da_Interface",
  "Salvamento_De_Modificacoes_Dentro_Do_Site",
  "Marcar_Area_Que_Vai_Modificar_Ativa",
  "Sub_Configuracao_Cor_Border_Vizualizacao",
  "Sub_Configuracao_Tamanho_Border_Vizualizacao",
];
//#endregion _Variavel_

//#region _Variavel_ filtros de tag
var Nao_Tag = [
  "HEAD",
  "META",
  "SCRIPT",
  "LINK",
  "STYLE",
  "DEEPL-INPUT-CONTROLLER",
];
//#endregion _Variavel_

//#region _Variavel_ filtros de Quantias
var Maxima_Quantia_Div = 50;
var Maxima_Quantia_Label = 39;
var Maxima_Quantia_Select = 17;
var Maxima_Quantia_Option = 145;
var Maxima_Quantia_Input = 23;
var Maxima_Quantia_Button = 6;
//#endregion _Variavel_

//#region _Variavel_ filtros de Vizualização de CSS
var Nao_CSS_Visualizar = [
  "block-size",
  "inline-size",
  "min-block-size",
  "min-inline-size",
  "perspective-origin",
  "transform-origin",
];
//#endregion _Variavel_

//#region _Variavel_ Variaveis Globais
var Div_Referente_Antiga,
  Valor_Da_Modificacao,
  Visibilidade_Atual_Ajudante,
  Tipo_Nome_Escolhido,
  Nome_Escolhido,
  Tipo_Declaracao_Escolhido_Modificar,
  Elemento_Modificar,
  Antiga_Declaracao_Valor_Escolhido,
  Verificar_Se_Tem_Esse_Tipo,
  Tipo_Declaracao_Escolhido_Modificar_Teste,
  Validador_Declaracao_Anterior_Existente,
  Passar_Cor_Fundo_Ajudante_Programacao,
  Cor_De_Fundo_Nao_Restaurada,
  Movimento_POsterior_Ja_Feito,
  Obter_Valor_Anterior_Elementos_Escolhidos,
  Obter_Valor_Anterior_Tipo_Escolhido,
  Obter_Valor_Anterior_Modificacao_Escolhida,
  Obter_Valor_Anterior_Cor_Fundo_Escolhida,
  Quantia_Anterior_Geral,
  Quantia_Anterior_Cor,
  Obter_Valor_Posterior_Elementos_Escolhidos,
  Quantia_Posterior_Geral,
  Obter_Valor_Posterior_Tipo_Escolhido,
  Obter_Valor_Posterior_Modificacao_Escolhida,
  Contador_Cor_Borda,
  Contador_Estilo_Borda,
  Contador_Tamanho_Borda,
  Contador_Repeticao_Borda,
  Div_Referente,
  Cor_Borda,
  Estilo_Borda,
  Tamanho_Borda,
  Contador_Padding_Top,
  Contador_Padding_Right,
  Contador_Padding_Left,
  Contador_Repeticao_Padding,
  Contador_Padding_Bottom,
  Valor_Configuracoes_Alteradas_De_Atualizacao_De_Alteracoes,
  Valor_Configuracoes_Alteradas_De_Input_Cor,
  Valor_Configuracoes_Alteradas_De_Tamanho_Geral,
  Valor_Configuracoes_Alteradas_De_Quantia_Linhas_Declaracao,
  Quantia_De_Linhas_Para_Declaracoes,
  Tamanho_Geral_Da_Interface,
  Validador_De_Tipo_De_Cor,
  Validador_De_Atualizacoes_De_Alteracoes,
  Referente_Valor_Da_Modificacao,
  Tipo_Modificador_Escolhido_Status,
  Nome_Escolhido_Status,
  Tipo_Declaracao_Status,
  Tamanho_Inicial_Elemento_Select_Tamanho_Da_Fonte,
  Tipo_De_Configuracao_De_Tipo_De_Fonte_Da_Interface,
  Valor_Configuracoes_Salvar_Modificacoes_Do_Site,
  Salvamento_De_Modificacoes_Dentro_Do_Site_Verdadeiro_Ou_Falso,
  Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Nome_Escolhido,
  Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Tipo_Nome_Escolhido,
  Contagem_De_Itens_Guardados_Para_Restauracao,
  Modificacoes_Salvas_Para_Restauracao_Do_Site_Tipo_De_Declaracao,
  Modificacoes_Salvas_Para_Restauracao_Do_Site_Valor_Da_Declaracao,
  Liberador_De_Fechamento_Para_Salvamento_De_Configuracao,
  Valor_Marcar_Area_Que_Vai_Modificar_Ativa,
  Valor_Marcar_Area_Que_Vai_Modificar_Ativa_Explicacao,
  Contagem_Para_Limpar_O_Anterior,
  Valor_Sub_Configuracoes_Cor_Border_Vizualizacao,
  Valor_De_Cor_Do_Border_De_Marcacao,
  Valor_Sub_Configuracoes_Tamanho_Border_Vizualizacao,
  Valor_De_Tamanho_Do_Border_De_Marcacao,
  Div_Para_Ser_Adicionada,
  Contagem_Para_Limpar_O_Anterior_Quando_For_Tag,
  Verificador_De_Tipo_De_Marcacao,
  Valor_Sub_Configuracoes_Marcacao_Exterior_Border_Vizualizacao,
  Elemento_Select_Para_Funcionamento_De_Pesquisa,
  Quantia_Existente_De_Elemento_Feitos,
  Valor_Borda_Antiga_Para_Recuperacao_Posterior,
  Tipo_Nome_Escolhido_Ultima_Realizacao,
  Nome_Escolhido_Ultima_Realizacao,
  Tipo_Declaracao_Escolhido_Modificar_Ultima_Realizacao,
  Elemento_Modificar_Salvar_Para_Recuperar_Borda,
  Ultimo_Tipo_Nome_Escolhido,
  Ultimo_Nome_Escolhido,
  Ultimo_Tipo_Declaracao_Escolhido_Modificar;
//#endregion _Variavel_

//#region _Variavel_ Variaveis de teste de repetição
Visibilidade_Atual_Ajudante = 0;
Cor_De_Fundo_Nao_Restaurada = 0;
Quantia_Anterior_Geral = 0;
Quantia_Anterior_Cor = -1;
Quantia_Posterior_Geral = 0;
Contador_Cor_Borda = 0;
Contador_Estilo_Borda = 0;
Contador_Tamanho_Borda = 0;
Contador_Repeticao_Borda = 1;
Contador_Repeticao_Padding = 1;
Contador_Padding_Bottom = 0;
Contador_Padding_Left = 0;
Contador_Padding_Right = 0;
Contador_Padding_Top = 0;
Contagem_De_Itens_Guardados_Para_Restauracao = 0;
Contagem_Para_Limpar_O_Anterior = 0;
Contagem_Para_Limpar_O_Anterior_Quando_For_Tag = 0;
Quantia_Existente_De_Elemento_Feitos = 0;
//#endregion _Variavel_

//#region _Variavel_ Variaveis de Objetos
Obter_Valor_Anterior_Elementos_Escolhidos = [];
Obter_Valor_Anterior_Tipo_Escolhido = [];
Obter_Valor_Anterior_Modificacao_Escolhida = [];
Obter_Valor_Anterior_Cor_Fundo_Escolhida = [];

Obter_Valor_Posterior_Elementos_Escolhidos = [];
Obter_Valor_Posterior_Tipo_Escolhido = [];
Obter_Valor_Posterior_Modificacao_Escolhida = [];

Tamanho_Inicial_Elemento_Select_Tamanho_Da_Fonte = [];

Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Tipo_Nome_Escolhido = [];
Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Nome_Escolhido = [];
Modificacoes_Salvas_Para_Restauracao_Do_Site_Tipo_De_Declaracao = [];
Modificacoes_Salvas_Para_Restauracao_Do_Site_Valor_Da_Declaracao = [];

Valor_Borda_Antiga_Para_Recuperacao_Posterior = [];
//#endregion _Variavel_

//#endregion _Variavel_ Principal
////---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//#region _Função_ Principal

//#region _Função_ Pre Carregamento Necessario
function Pre_Carregamento_Necessario() {
  //#region Carregamento de Elementos do HTML
  Tipo_Declaracao_Escolhido_Modificar = document.getElementById(
    "Tipo_Declaracao_Escolhido"
  ).value;

  Tipo_Modificador_Escolhido_Status = document.getElementById(
    "Tipo_Modificador_Escolhido"
  );
  Nome_Escolhido_Status = document.getElementById(
    "Selecao_Aparecer_Selecionado"
  );
  Tipo_Declaracao_Status = document.getElementById("Tipo_Declaracao_Escolhido");
  //#endregion
}
//#endregion _Função_

//#region _Função_ Obter todas as classes/ids/tags
function Obetendo_Class_Id_Tag() {
  //#region Contar quantia de tags de cada um
  var Quantia_Div = document.getElementsByTagName("div").length;
  var Quantia_Label = document.getElementsByTagName("label").length;
  var Quantia_Select = document.getElementsByTagName("select").length;
  var Quantia_Option = document.getElementsByTagName("option").length;
  var Quantia_Input = document.getElementsByTagName("input").length;
  var Quantia_Button = document.getElementsByTagName("button").length;
  //#endregion

  //#region Verificar quantias minimas já existentes para definir exclusão ou não
  if (Quantia_Div < Maxima_Quantia_Div) {
    Nao_Tag.push("DIV");
  }
  if (Quantia_Label < Maxima_Quantia_Label) {
    Nao_Tag.push("LABEL");
  }
  if (Quantia_Select < Maxima_Quantia_Select) {
    Nao_Tag.push("SELECT");
  }
  if (Quantia_Option < Maxima_Quantia_Option) {
    Nao_Tag.push("OPTION");
  }
  if (Quantia_Input < Maxima_Quantia_Input) {
    Nao_Tag.push("INPUT");
  }
  if (Quantia_Button < Maxima_Quantia_Button) {
    Nao_Tag.push("BUTTON");
  }
  // #endregion

  //#region Obetem todos os elemetentos
  var Todos_Elementos = document.getElementsByTagName("*");
  // #endregion

  //#region Cria as variaveis que vão receber as classes, ids e tags respectivamente
  var Class_Site = new Set();
  var Id_Site = new Set();
  var Tag_Site = new Set();
  // #endregion

  //Começa repetição para separar
  for (var i = 0; i < Todos_Elementos.length; i++) {
    //#region Obtendo a lista de classes
    var Todas_Class = Todos_Elementos[i].classList;
    //#endregion

    //Separando as classes
    for (var j = 0; j < Todas_Class.length; j++) {
      //Removendo as classes indesejadas
      if (!Nao_Class.includes(Todas_Class[j])) {
        //#region Adicionando a class
        Class_Site.add(Todas_Class[j]);
        //#endregion
      }
    }

    //Obtendo somente ids
    if (Todos_Elementos[i].id && !Nao_Id.includes(Todos_Elementos[i].id)) {
      //#region Separando os Ids
      Id_Site.add(Todos_Elementos[i].id);
      //#endregion
    }

    //Separando as tags
    if (!Nao_Tag.includes(Todos_Elementos[i].tagName)) {
      //#region Adicionando somente as foras da lista de exclusão
      Tag_Site.add(Todos_Elementos[i].tagName);
      //#endregion
    }
  }

  //#region Adicionando os Elementos Select
  var Selecao_Aparecer_Selecionado = document.getElementById(
    "Selecao_Aparecer_Selecionado"
  );
  //#endregion

  //Função para adicionar separar todos os tipos
  function Separar_Opcoes(set, select) {
    //#region Limpar Antigas Opções
    select.innerHTML = "";
    //#endregion

    set.forEach(function (item) {
      //#region Cria uma nova opção
      var option = document.createElement("option");
      //#endregion

      //#region Define o Texto eo valor da opção
      option.value = item;
      option.text = item;
      //#endregion

      //#region Adiciona a opção ao elemento Select
      select.add(option);
      //#endregion
    });
  }

  //#region Obtem o valor do select para verificar quais opções deve mostrar
  var Tipo_Modificador_Escolhido = document.getElementById(
    "Tipo_Modificador_Escolhido"
  ).value;
  //#endregion

  //Verifica se o valor do Tipo Escolhido é Class
  if (Tipo_Modificador_Escolhido == "Class") {
    Separar_Opcoes(Class_Site, Selecao_Aparecer_Selecionado);
  }

  //Verifica se o valor do Tipo Escolhido é Id
  if (Tipo_Modificador_Escolhido == "Id") {
    Separar_Opcoes(Id_Site, Selecao_Aparecer_Selecionado);
  }

  //Verifica se o valor do Tipo Escolhido é Tag
  if (Tipo_Modificador_Escolhido == "Tag") {
    Separar_Opcoes(Tag_Site, Selecao_Aparecer_Selecionado);
  }
  Vizualizacao_De_Area_Que_Vai_Modificar();
}
//#endregion _Função_

//#region _Função_ Alterar/Atualizar o estilo do elemento selecionado
function Alterar_Estilo_Elemento_Selecionado() {
  //Atualizar_Tipo_Declaracao();
  Vizualizacao_De_Area_Que_Vai_Modificar();

  if (
    (Tipo_Declaracao_Escolhido_Modificar_Teste =
      Tipo_Declaracao_Escolhido_Modificar)
  ) {
    Validador_Declaracao_Anterior_Existente = 1;
  } else {
    Validador_Declaracao_Anterior_Existente = 0;
  }

  //#region Puxando o Valor do nome, o tipo de declaração e o tipo de nome
  Tipo_Nome_Escolhido = document.getElementById(
    "Tipo_Modificador_Escolhido"
  ).value;
  Nome_Escolhido = document.getElementById(
    "Selecao_Aparecer_Selecionado"
  ).value;
  Elemento_Modificar;
  Tipo_Declaracao_Escolhido_Modificar = document.getElementById(
    "Tipo_Declaracao_Escolhido"
  ).value;
  //#endregion

  Ultimo_Tipo_Nome_Escolhido = Tipo_Nome_Escolhido;
  Ultimo_Nome_Escolhido = Nome_Escolhido;
  Ultimo_Tipo_Declaracao_Escolhido_Modificar =
    Tipo_Declaracao_Escolhido_Modificar;

  Cookies.set("Ultimo_Tipo_Nome_Escolhido", Ultimo_Tipo_Nome_Escolhido, {
    expires: 30,
  });
  Cookies.set("Ultimo_Nome_Escolhido", Ultimo_Nome_Escolhido, {
    expires: 30,
  });
  Cookies.set(
    "Ultimo_Tipo_Declaracao_Escolhido_Modificar",
    Ultimo_Tipo_Declaracao_Escolhido_Modificar,
    {
      expires: 30,
    }
  );

  //#region Verificando o tipo do nome, e adicionando a variavel Elemento_Modificar
  if (Tipo_Nome_Escolhido == "Class") {
    Elemento_Modificar = document.querySelectorAll("." + Nome_Escolhido);
  } else if (Tipo_Nome_Escolhido == "Id") {
    Elemento_Modificar = document.querySelectorAll("#" + Nome_Escolhido);
  } else if (Tipo_Nome_Escolhido == "Tag") {
    Elemento_Modificar = document.querySelectorAll(Nome_Escolhido);
  }
  //#endregion

  if ((Validador_Declaracao_Anterior_Existente = 1)) {
    Quantia_Anterior_Geral++;

    //#region Elementos escolhidos
    Obter_Valor_Anterior_Elementos_Escolhidos[Quantia_Anterior_Geral] =
      Elemento_Modificar;
    //#endregion

    //#region Tipos EScolhidos
    Obter_Valor_Anterior_Tipo_Escolhido[Quantia_Anterior_Geral] =
      Tipo_Declaracao_Escolhido_Modificar;
    //#endregion

    //#region Modificações Escolhidas
    if (Tipo_Declaracao_Escolhido_Modificar === "Alterar_Texto_innerHTML") {
      Obter_Valor_Anterior_Modificacao_Escolhida[Quantia_Anterior_Geral] =
        Elemento_Modificar[0].textContent;
    } else {
      Obter_Valor_Anterior_Modificacao_Escolhida[Quantia_Anterior_Geral] =
        Elemento_Modificar[0].style[Tipo_Declaracao_Escolhido_Modificar];
    }
    //#endregion

    //#region Cores de fundo, escolhidas
    if (Tipo_Declaracao_Escolhido_Modificar == "backgroundColor") {
      Quantia_Anterior_Cor++;
      Obter_Valor_Anterior_Cor_Fundo_Escolhida[Quantia_Anterior_Cor] =
        Valor_Da_Modificacao;
    }
    //#endregion
  }

  //#region Obtendo valor da modificação
  Valor_Da_Modificacao = document.querySelector(
    "#Div_" + Tipo_Declaracao_Escolhido_Modificar + "_Valor"
  ).value;
  //#endregion

  if (Tipo_Declaracao_Escolhido_Modificar === "Alterar_Texto_innerHTML") {
    Elemento_Modificar.forEach(function (elem) {
      elem.innerHTML = Valor_Da_Modificacao;
    });
  } else {
    //#region Modificação final
    Elemento_Modificar.forEach(function (elem) {
      elem.style[Tipo_Declaracao_Escolhido_Modificar] = Valor_Da_Modificacao;
    });

    if (Tipo_Declaracao_Escolhido_Modificar == "backgroundColor") {
      Passar_Cor_Fundo_Ajudante_Programacao = Valor_Da_Modificacao;
      Cor_De_Fundo_Nao_Restaurada = 0;
    }
  }

  Tipo_Declaracao_Escolhido_Modificar_Teste =
    Tipo_Declaracao_Escolhido_Modificar;

  if (
    Salvamento_De_Modificacoes_Dentro_Do_Site_Verdadeiro_Ou_Falso ==
    "Salvar Modificacoes"
  ) {
    if (
      Tipo_Nome_Escolhido !== Tipo_Nome_Escolhido_Ultima_Realizacao ||
      Nome_Escolhido !== Nome_Escolhido_Ultima_Realizacao ||
      Tipo_Declaracao_Escolhido_Modificar !==
        Tipo_Declaracao_Escolhido_Modificar_Ultima_Realizacao
    ) {
      console.log("Modificação diferente");
      console.log(
        "Quantia de Modificacoes: " +
          Contagem_De_Itens_Guardados_Para_Restauracao
      );
      Contagem_De_Itens_Guardados_Para_Restauracao++;
    }

    Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Nome_Escolhido[
      Contagem_De_Itens_Guardados_Para_Restauracao
    ] = Nome_Escolhido;

    Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Tipo_Nome_Escolhido[
      Contagem_De_Itens_Guardados_Para_Restauracao
    ] = Tipo_Nome_Escolhido;

    Modificacoes_Salvas_Para_Restauracao_Do_Site_Tipo_De_Declaracao[
      Contagem_De_Itens_Guardados_Para_Restauracao
    ] = Tipo_Declaracao_Escolhido_Modificar;

    Modificacoes_Salvas_Para_Restauracao_Do_Site_Valor_Da_Declaracao[
      Contagem_De_Itens_Guardados_Para_Restauracao
    ] = Valor_Da_Modificacao;

    Cookies.set(
      "Contagem_De_Itens_Guardados_Para_Restauracao",
      Contagem_De_Itens_Guardados_Para_Restauracao,
      {
        expires: 30,
      }
    );

    Cookies.set(
      "Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Nome_Escolhido",
      Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Nome_Escolhido,
      {
        expires: 30,
      }
    );

    Cookies.set(
      "Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Tipo_Nome_Escolhido",
      Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Tipo_Nome_Escolhido,
      {
        expires: 30,
      }
    );

    Cookies.set(
      "Modificacoes_Salvas_Para_Restauracao_Do_Site_Tipo_De_Declaracao",
      Modificacoes_Salvas_Para_Restauracao_Do_Site_Tipo_De_Declaracao,
      {
        expires: 30,
      }
    );

    Cookies.set(
      "Modificacoes_Salvas_Para_Restauracao_Do_Site_Valor_Da_Declaracao",
      Modificacoes_Salvas_Para_Restauracao_Do_Site_Valor_Da_Declaracao,
      {
        expires: 30,
      }
    );
  }

  //#endregion
  Tipo_Nome_Escolhido_Ultima_Realizacao = Tipo_Nome_Escolhido;
  Nome_Escolhido_Ultima_Realizacao = Nome_Escolhido;
  Tipo_Declaracao_Escolhido_Modificar_Ultima_Realizacao =
    Tipo_Declaracao_Escolhido_Modificar;
  Vizualizacao_De_Area_Que_Vai_Modificar();
}
//#endregion _Função_

//#region _Função_ Atualizar Tipo de Declaração
function Atualizar_Tipo_Declaracao() {
  if (Div_Referente_Antiga) {
    //#region Ocultando novamente as antigas
    Div_Referente_Antiga.style.display = "none";
    //#endregion
  }

  var Tipo_Declaracao_Escolhido_Modificar = document.getElementById(
    "Tipo_Declaracao_Escolhido"
  ).value;

  Div_Referente = document.querySelector(
    ".Div_" + Tipo_Declaracao_Escolhido_Modificar
  );
  Div_Referente.style.display = "flex";
  Div_Referente_Antiga = Div_Referente;

  Pre_Carregamento_Necessario();
  Alterar_Tipo_De_Configuracao_De_Cor();
  Atualizar_Referencia_Para_MOdificacao_Automatica();
}
//#endregion _Função_

//#region _Função_ Ativar todas as funções
function Ativar_Todas_Funcoes_1() {
  Obetendo_Class_Id_Tag();
  Atualizar_Tipo_Declaracao();
  Pre_Carregamento_Necessario();
}
function Ativar_Todas_Funcoes_2() {
  Atualizar_Tipo_Declaracao();
  Vizualizacao_De_Area_Que_Vai_Modificar();
}
//#endregion _Função_

//#region _Função_ Alterar/ocultar a visibilidade do ajudante
function Alterar_Visualizacao_Do_Ajudante_De_Programacao() {
  var Ajudante_Programacao_Alterar_Visibilidade_Classes =
    document.getElementsByClassName("Items_Ocultados_Com_Botao_Oculsao");
  var Ajudante_Programacao_Alterar_Borda_Tirar_Colocar = document.querySelector(
    ".Pre_Programa_Ajudante"
  );
  var Botao_Alterar_Visibilidade_Oculto_Desoculto_Ajudante =
    document.querySelector("#Botao_Alterar_Visibilidade_Oculto_Desoculto");

  if (Visibilidade_Atual_Ajudante === 0) {
    for (
      var i = 0;
      i < Ajudante_Programacao_Alterar_Visibilidade_Classes.length;
      i++
    ) {
      Ajudante_Programacao_Alterar_Visibilidade_Classes[i].style.display =
        "none";
    }
    Ajudante_Programacao_Alterar_Borda_Tirar_Colocar.style.border = "0px";
    if (Cor_De_Fundo_Nao_Restaurada === 0) {
      Ajudante_Programacao_Alterar_Borda_Tirar_Colocar.style.backgroundColor =
        "rgba(0,0,0,0)";
    } else if (Cor_De_Fundo_Nao_Restaurada === 1) {
      Ajudante_Programacao_Alterar_Borda_Tirar_Colocar.style.backgroundColor =
        "rgba(0,0,0,0)";
      delete Obter_Valor_Anterior_Cor_Fundo_Escolhida[Quantia_Anterior_Cor];
      Quantia_Anterior_Cor--;
    }
    Botao_Alterar_Visibilidade_Oculto_Desoculto_Ajudante.style.opacity = "0.4";
    Botao_Alterar_Visibilidade_Oculto_Desoculto_Ajudante.innerHTML =
      "Desocultar";

    Visibilidade_Atual_Ajudante = 1;
  } else if (Visibilidade_Atual_Ajudante === 1) {
    for (
      var i = 0;
      i < Ajudante_Programacao_Alterar_Visibilidade_Classes.length;
      i++
    ) {
      Ajudante_Programacao_Alterar_Visibilidade_Classes[i].style.display = "";
    }
    Ajudante_Programacao_Alterar_Borda_Tirar_Colocar.style.border = "";
    Ajudante_Programacao_Alterar_Borda_Tirar_Colocar.style.backgroundColor =
      "white";
    Botao_Alterar_Visibilidade_Oculto_Desoculto_Ajudante.style.opacity = "";
    Botao_Alterar_Visibilidade_Oculto_Desoculto_Ajudante.innerHTML = "Ocultar";

    Visibilidade_Atual_Ajudante = 0;
  }
}
//#endregion _Função_

//#region _Função_ Mudar fundo das opções, opção sim opção não
function Alterar_Cores_Fundo_Opcoes_Sim_Opcao_Nao() {
  var select = document.getElementsByTagName("select");

  for (var c = 0; c < select.length; c++) {
    var options = select[c].getElementsByTagName("option");
    var colors = ["lightgray", "darkgray"]; // Defina a sequência de cores desejada

    for (var i = 0; i < options.length; i++) {
      options[i].style.backgroundColor = colors[i % colors.length];
    }
  }
}
//#endregion _Função_

//#region _Função_ Restaurar a ultima modificação
function Restaurar_Ultima_Modificacao_Realizada() {
  if (Quantia_Posterior_Geral === 0) {
    Obter_Valor_Posterior_Elementos_Escolhidos[0] = Elemento_Modificar;

    Obter_Valor_Posterior_Tipo_Escolhido[0] =
      Tipo_Declaracao_Escolhido_Modificar;

    Obter_Valor_Posterior_Modificacao_Escolhida[0] =
      Elemento_Modificar[0].style[Tipo_Declaracao_Escolhido_Modificar];
  }

  if (Quantia_Anterior_Geral === 0) {
    //Antes era <= 0
    alert("Não existem mais alterações salvas");
  } else {
    Quantia_Posterior_Geral++;

    if (
      Obter_Valor_Anterior_Tipo_Escolhido[Quantia_Anterior_Geral] ===
      "Alterar_Texto_innerHTML"
    ) {
      Obter_Valor_Anterior_Elementos_Escolhidos[Quantia_Anterior_Geral].forEach(
        function (elem) {
          elem.innerHTML =
            Obter_Valor_Anterior_Modificacao_Escolhida[Quantia_Anterior_Geral];
        }
      );
    } else {
      Obter_Valor_Anterior_Elementos_Escolhidos[Quantia_Anterior_Geral].forEach(
        function (elem) {
          elem.style[
            Obter_Valor_Anterior_Tipo_Escolhido[Quantia_Anterior_Geral]
          ] =
            Obter_Valor_Anterior_Modificacao_Escolhida[Quantia_Anterior_Geral];
        }
      );
    }

    Obter_Valor_Posterior_Elementos_Escolhidos[Quantia_Posterior_Geral] =
      Obter_Valor_Anterior_Elementos_Escolhidos[Quantia_Anterior_Geral];
    Obter_Valor_Posterior_Tipo_Escolhido[Quantia_Posterior_Geral] =
      Obter_Valor_Anterior_Tipo_Escolhido[Quantia_Anterior_Geral];
    Obter_Valor_Posterior_Modificacao_Escolhida[Quantia_Posterior_Geral] =
      Obter_Valor_Anterior_Modificacao_Escolhida[Quantia_Anterior_Geral];

    Cor_De_Fundo_Nao_Restaurada = 1;

    if (Quantia_Anterior_Cor < 1) {
      Quantia_Anterior_Cor--;
    }

    Quantia_Anterior_Geral--;
  }
}
//#endregion _Função_

//#region _Função_ Restaurar modificação já feita
function Restaurar_Posterior_Modificacao_Realizada() {
  if (Quantia_Posterior_Geral === 0) {
    alert("Não existem mais atualizações salvas");
  } else {
    Quantia_Anterior_Geral++;

    Quantia_Posterior_Geral--;

    if (
      Obter_Valor_Posterior_Tipo_Escolhido[Quantia_Posterior_Geral] ===
      "Alterar_Texto_innerHTML"
    ) {
      Obter_Valor_Posterior_Elementos_Escolhidos[
        Quantia_Posterior_Geral
      ].forEach(function (elem) {
        elem.innerHTML =
          Obter_Valor_Posterior_Modificacao_Escolhida[Quantia_Posterior_Geral];
      });
    } else {
      Obter_Valor_Posterior_Elementos_Escolhidos[
        Quantia_Posterior_Geral
      ].forEach(function (elem) {
        elem.style[
          Obter_Valor_Posterior_Tipo_Escolhido[Quantia_Posterior_Geral]
        ] =
          Obter_Valor_Posterior_Modificacao_Escolhida[Quantia_Posterior_Geral];
      });
    }

    Obter_Valor_Anterior_Elementos_Escolhidos[Quantia_Anterior_Geral] =
      Obter_Valor_Posterior_Elementos_Escolhidos[Quantia_Posterior_Geral];
    Obter_Valor_Anterior_Tipo_Escolhido[Quantia_Anterior_Geral] =
      Obter_Valor_Posterior_Tipo_Escolhido[Quantia_Posterior_Geral];
    Obter_Valor_Anterior_Modificacao_Escolhida[Quantia_Anterior_Geral] =
      Obter_Valor_Posterior_Modificacao_Escolhida[Quantia_Posterior_Geral];
  }
}
//#endregion _Função_

//#region _Função_ Obter e visuzalizar Estilos do elemento
function Visualizar_Declarações_Atribuidas_Elemento() {
  Atualizar_Tipo_Declaracao();

  Tipo_Nome_Escolhido = document.getElementById(
    "Tipo_Modificador_Escolhido"
  ).value;
  Nome_Escolhido = document.getElementById(
    "Selecao_Aparecer_Selecionado"
  ).value;
  Tipo_Declaracao_Escolhido_Modificar = document.getElementById(
    "Tipo_Declaracao_Escolhido"
  ).value;

  var Valor_Aceito_Para_Puxar_Propriedade =
    Alterando_Tudo_Junto_Separacao_Traco(Tipo_Declaracao_Escolhido_Modificar);

  // Obtém o elemento pelo seu ID
  var elemento;

  if (Tipo_Nome_Escolhido == "Class") {
    elemento = document.querySelector("." + Nome_Escolhido);
  } else if (Tipo_Nome_Escolhido == "Id") {
    elemento = document.querySelector("#" + Nome_Escolhido);
  } else if (Tipo_Nome_Escolhido == "Tag") {
    elemento = document.querySelector(Nome_Escolhido);
  }

  if (elemento) {
    var estilosComputados = window.getComputedStyle(elemento);
  }
  if (estilosComputados) {
    var Estilo_Unico_Selecionado = estilosComputados.getPropertyValue(
      Valor_Aceito_Para_Puxar_Propriedade
    );
  }

  if (Tipo_Declaracao_Escolhido_Modificar === "cssText") {
    var elemento_limpador = document.getElementById(
      "Referencia_Para_Abrir_Padroes_De_Limpeza"
    );

    // Obtém os estilos computados para o elemento
    var estilosComputados_limpador = window.getComputedStyle(elemento_limpador);

    var Estilos_Reais = [];

    for (var j = 0; j < estilosComputados.length; j++) {
      var propriedade = estilosComputados[j];
      var propriedade_limpador = estilosComputados_limpador[j];

      var Valor_Estilo = estilosComputados.getPropertyValue(propriedade);
      var Valor_Estilo_Limpador =
        estilosComputados_limpador.getPropertyValue(propriedade_limpador);

      if (Valor_Estilo.includes("border") && Valor_Estilo.includes("color")) {
        Cor_Borda = Valor_Estilo;
        Contador_Cor_Borda = 1;
      }

      if (
        Valor_Estilo !== Valor_Estilo_Limpador &&
        (Valor_Estilo !== "0px" || propriedade.includes("padding")) &&
        !Nao_CSS_Visualizar.includes(propriedade) &&
        (Valor_Estilo !== undefined || Valor_Estilo !== "undefined")
      ) {
        if (Valor_Estilo.includes("rgb")) {
          if (Nome_Cor_RGB[Valor_Estilo]) {
            Valor_Estilo = Nome_Cor_RGB[Valor_Estilo];
          }
        }
        if (propriedade.includes("border")) {
          if (propriedade.includes("color")) {
            Cor_Borda = Valor_Estilo;
            Contador_Cor_Borda = 1;
          }
          if (Contador_Estilo_Borda == 1 && Contador_Tamanho_Borda == 1) {
            Cor_Borda = "black";
            Contador_Cor_Borda = 1;
          }
          if (propriedade.includes("style")) {
            Estilo_Borda = Valor_Estilo;
            Contador_Estilo_Borda = 1;
          }
          if (propriedade.includes("width")) {
            Tamanho_Borda = Valor_Estilo;
            Contador_Tamanho_Borda = 1;
          }
          if (
            Contador_Tamanho_Borda === 1 &&
            Contador_Estilo_Borda === 1 &&
            Contador_Cor_Borda === 1 &&
            Contador_Repeticao_Borda === 1
          ) {
            Estilos_Reais[j] =
              "border: " + Tamanho_Borda + " " + Estilo_Borda + " " + Cor_Borda;
            Contador_Repeticao_Borda = 0;
          }
        } else if (propriedade.includes("padding")) {
          if (propriedade.includes("bottom")) {
            var Padding_Bottom = Valor_Estilo;
            Contador_Padding_Bottom = 1;
          }
          if (propriedade.includes("left")) {
            var Padding_Left = Valor_Estilo;
            Contador_Padding_Left = 1;
          }
          if (propriedade.includes("right")) {
            var Padding_Right = Valor_Estilo;
            Contador_Padding_Right = 1;
          }
          if (propriedade.includes("top")) {
            var Padding_Top = Valor_Estilo;
            Contador_Padding_Top = 1;
          }
          if (
            Contador_Padding_Top === 1 &&
            Contador_Padding_Right === 1 &&
            Contador_Padding_Left === 1 &&
            Contador_Repeticao_Padding === 1 &&
            Contador_Padding_Bottom === 1
          ) {
            if (
              Padding_Bottom === Padding_Left &&
              Padding_Top === Padding_Right
            ) {
              Estilos_Reais[j] = "padding: " + Padding_Bottom;
              Contador_Repeticao_Padding = 0;
            } else if (
              Padding_Bottom === Padding_Top &&
              Padding_Left === Padding_Right
            ) {
              Estilos_Reais[j] =
                "padding: " + Padding_Bottom + " " + Padding_Right;
              Contador_Repeticao_Padding = 0;
            } else {
              Estilos_Reais[j] =
                "padding: " +
                Padding_Top +
                " " +
                Padding_Right +
                " " +
                Padding_Bottom +
                " " +
                Padding_Left;
              Contador_Repeticao_Padding = 0;
            }
          }
        } else {
          Estilos_Reais[j] = propriedade + ": " + Valor_Estilo;
        }
      }
    }

    Div_Referente.querySelector("textarea").value = "";
    Contador_Padding_Top = 0;
    Contador_Padding_Right = 0;
    Contador_Padding_Left = 0;
    Contador_Repeticao_Padding = 1;
    Contador_Padding_Bottom = 0;
    Contador_Tamanho_Borda = 0;
    Contador_Estilo_Borda = 0;
    Contador_Cor_Borda = 0;
    Contador_Repeticao_Borda = 1;

    for (var j = 0; j < estilosComputados.length; j++) {
      if (Estilos_Reais[j]) {
        Div_Referente.querySelector("textarea").value +=
          Estilos_Reais[j] + ";\n";
      }
    }
  } else if (
    Modificacoes_Do_Tipo_Select.includes(
      "Div_" + Tipo_Declaracao_Escolhido_Modificar + "_Valor"
    )
  ) {
    var Select_Vai_Alterar_Selecionado = document.getElementById(
      "Div_" + Tipo_Declaracao_Escolhido_Modificar + "_Valor"
    );

    for (var g = 0; g < Select_Vai_Alterar_Selecionado.options.length; g++) {
      if (
        Select_Vai_Alterar_Selecionado.options[g].value ===
        Estilo_Unico_Selecionado
      ) {
        Select_Vai_Alterar_Selecionado.selectedIndex = g;
        break;
      }
    }
  } else if (Estilo_Unico_Selecionado.includes("rgb")) {
    var Estilo_Unico_Selecionado_Color = Alterar_Cor_RGB_Para_Cor_Hexadecimal(
      Estilo_Unico_Selecionado
    );
    Div_Referente.querySelector("input").value = Estilo_Unico_Selecionado_Color;
  } else {
    Div_Referente.querySelector("input").value = Estilo_Unico_Selecionado;
  }
}
//#endregion _Função_

//#region _Função_ Alterar texto de todas as palavras juntas, para separar palavras pelo -
function Alterando_Tudo_Junto_Separacao_Traco(
  Tipo_Declaracao_Escolhido_Modificar
) {
  return Tipo_Declaracao_Escolhido_Modificar.replace(
    /([a-z])([A-Z])/g,
    "$1-$2"
  ).toLowerCase();
}
//#endregion _Função_

//#region _Função_ Alterar cor RGB em cor Hexadecimal
function Alterar_Cor_RGB_Para_Cor_Hexadecimal(Cor_RGB_Mudar) {
  // Separa os valores de R, G e B
  var valores_cor_rgb_unidade = Cor_RGB_Mudar.match(
    /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/
  );

  // Se o padrão não corresponder, retorna a cor original
  if (!valores_cor_rgb_unidade) {
    return Cor_RGB_Mudar;
  }

  // Converte os valores para hexadecimal e os concatena
  function componenteParaHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  var hex =
    "#" +
    componenteParaHex(parseInt(valores_cor_rgb_unidade[1])) +
    componenteParaHex(parseInt(valores_cor_rgb_unidade[2])) +
    componenteParaHex(parseInt(valores_cor_rgb_unidade[3]));

  return hex;
}
//#endregion _Função_

//#region _Função_ Vizualizar as configurações
function Vizualizar_Configuracoes_Do_Ajudante_De_Programacao() {
  var Display_Configuracoes_Ajudante_Programacao = document.querySelector(
    ".Configuracoes_Do_Ajudante_De_Programacao"
  );

  Display_Configuracoes_Ajudante_Programacao.style.display = "flex";
}
//#endregion _Função_

//#region _Função_ Fechar as configurações
function Fechar_Configuracoes_Do_Ajudante_De_Programacao() {
  var Display_Configuracoes_Ajudante_Programacao = document.querySelector(
    ".Configuracoes_Do_Ajudante_De_Programacao"
  );

  Display_Configuracoes_Ajudante_Programacao.style.display = "none";
}
//#endregion _Função_

//#region _Função_ Salvar as configurações em cookies
function Salvar_Configuracoes_Em_Cookies() {
  Valor_Configuracoes_Alteradas_De_Atualizacao_De_Alteracoes =
    document.getElementById(
      "Tipo_De_Configuracao_De_Atualizacao_De_Alteracoes"
    ).checked;

  Valor_Configuracoes_Alteradas_De_Input_Cor = document.getElementById(
    "Tipo_De_Configuracao_De_Input_Cor"
  ).value;

  Valor_Configuracoes_Alteradas_De_Tamanho_Geral = document.getElementById(
    "Tipo_De_Configuracao_De_Tamanho_Geral"
  ).value;

  Tipo_De_Configuracao_De_Tipo_De_Fonte_Da_Interface = document.getElementById(
    "Tipo_De_Configuracao_De_Tipo_De_Fonte_Da_Interface"
  ).value;

  Valor_Configuracoes_Salvar_Modificacoes_Do_Site = document.getElementById(
    "Salvamento_De_Modificacoes_Dentro_Do_Site"
  ).checked;

  Valor_Marcar_Area_Que_Vai_Modificar_Ativa = document.getElementById(
    "Marcar_Area_Que_Vai_Modificar_Ativa"
  ).checked;

  Valor_Sub_Configuracoes_Cor_Border_Vizualizacao = document.getElementById(
    "Sub_Configuracao_Cor_Border_Vizualizacao"
  ).value;

  Valor_Sub_Configuracoes_Tamanho_Border_Vizualizacao = document.getElementById(
    "Sub_Configuracao_Tamanho_Border_Vizualizacao"
  ).value;

  Valor_Sub_Configuracoes_Marcacao_Exterior_Border_Vizualizacao =
    document.getElementById(
      "Sub_Configuracao_Marcacao_Exterior_Border_Vizualizacao"
    ).checked;

  Cookies.set(
    "Escolha_Configuracao_CheckBox_Atualizacao_Automatica",
    Valor_Configuracoes_Alteradas_De_Atualizacao_De_Alteracoes,
    {
      expires: 30,
    }
  );

  Cookies.set(
    "Escolha_Configuracao_Select_Configuracao_Cor",
    Valor_Configuracoes_Alteradas_De_Input_Cor,
    {
      expires: 30,
    }
  );

  Cookies.set(
    "Escolha_Configuracao_Input_Tamanho_Geral",
    Valor_Configuracoes_Alteradas_De_Tamanho_Geral,
    {
      expires: 30,
    }
  );

  Cookies.set(
    "Tipo_De_Configuracao_De_Tipo_De_Fonte_Da_Interface",
    Tipo_De_Configuracao_De_Tipo_De_Fonte_Da_Interface,
    {
      expires: 30,
    }
  );

  Cookies.set(
    "Valor_Configuracoes_Salvar_Modificacoes_Do_Site",
    Valor_Configuracoes_Salvar_Modificacoes_Do_Site,
    {
      expires: 30,
    }
  );
  Cookies.set(
    "Valor_Marcar_Area_Que_Vai_Modificar_Ativa",
    Valor_Marcar_Area_Que_Vai_Modificar_Ativa,
    {
      expires: 30,
    }
  );

  Cookies.set(
    "Valor_Sub_Configuracoes_Cor_Border_Vizualizacao",
    Valor_Sub_Configuracoes_Cor_Border_Vizualizacao,
    {
      expires: 30,
    }
  );

  Cookies.set(
    "Valor_Sub_Configuracoes_Tamanho_Border_Vizualizacao",
    Valor_Sub_Configuracoes_Tamanho_Border_Vizualizacao,
    {
      expires: 30,
    }
  );

  Cookies.set(
    "Valor_Sub_Configuracoes_Marcacao_Exterior_Border_Vizualizacao",
    Valor_Sub_Configuracoes_Marcacao_Exterior_Border_Vizualizacao,
    {
      expires: 30,
    }
  );

  Alterar_Modificacoes_Das_Configuracoes_Do_Programa_Ajudante();
  Fechar_Configuracoes_Do_Ajudante_De_Programacao();
  Alterar_Tipo_De_Configuracao_De_Cor();
  Atualizar_Elementos_Para_Nova_Referencia_Em_Eventos();
  Vizualizacao_De_Area_Que_Vai_Modificar();
}
//#endregion _Função_

//#region _Função_ Restaurar as configurações anteriores
function Restaurar_Configuracoes_Anteriores_Salvas_Em_Cookies() {
  if (Cookies.get("Escolha_Configuracao_CheckBox_Atualizacao_Automatica")) {
    if (
      Cookies.get("Escolha_Configuracao_CheckBox_Atualizacao_Automatica") ==
      "false"
    ) {
    } else {
      document.getElementById(
        "Tipo_De_Configuracao_De_Atualizacao_De_Alteracoes"
      ).checked = Cookies.get(
        "Escolha_Configuracao_CheckBox_Atualizacao_Automatica"
      );
      Valor_Configuracoes_Alteradas_De_Atualizacao_De_Alteracoes = Cookies.get(
        "Escolha_Configuracao_CheckBox_Atualizacao_Automatica"
      );
    }
  }

  if (Cookies.get("Escolha_Configuracao_Select_Configuracao_Cor")) {
    document.getElementById("Tipo_De_Configuracao_De_Input_Cor").value =
      Cookies.get("Escolha_Configuracao_Select_Configuracao_Cor");
    Valor_Configuracoes_Alteradas_De_Input_Cor = Cookies.get(
      "Escolha_Configuracao_Select_Configuracao_Cor"
    );
  }

  if (Cookies.get("Escolha_Configuracao_Input_Tamanho_Geral")) {
    document.getElementById("Tipo_De_Configuracao_De_Tamanho_Geral").value =
      Cookies.get("Escolha_Configuracao_Input_Tamanho_Geral");
    Valor_Configuracoes_Alteradas_De_Tamanho_Geral = Cookies.get(
      "Escolha_Configuracao_Input_Tamanho_Geral"
    );
  }

  if (Cookies.get("Tipo_De_Configuracao_De_Tipo_De_Fonte_Da_Interface")) {
    document.getElementById(
      "Tipo_De_Configuracao_De_Tipo_De_Fonte_Da_Interface"
    ).value = Cookies.get("Tipo_De_Configuracao_De_Tipo_De_Fonte_Da_Interface");
    Tipo_De_Configuracao_De_Tipo_De_Fonte_Da_Interface = Cookies.get(
      "Tipo_De_Configuracao_De_Tipo_De_Fonte_Da_Interface"
    );
  }

  if (Cookies.get("Valor_Configuracoes_Salvar_Modificacoes_Do_Site")) {
    if (
      Cookies.get("Valor_Configuracoes_Salvar_Modificacoes_Do_Site") == "false"
    ) {
    } else {
      document.getElementById(
        "Salvamento_De_Modificacoes_Dentro_Do_Site"
      ).checked = Cookies.get(
        "Valor_Configuracoes_Salvar_Modificacoes_Do_Site"
      );
      Valor_Configuracoes_Salvar_Modificacoes_Do_Site = Cookies.get(
        "Valor_Configuracoes_Salvar_Modificacoes_Do_Site"
      );
    }
  }

  if (Cookies.get("Valor_Marcar_Area_Que_Vai_Modificar_Ativa")) {
    if (Cookies.get("Valor_Marcar_Area_Que_Vai_Modificar_Ativa") == "false") {
    } else {
      document.getElementById("Marcar_Area_Que_Vai_Modificar_Ativa").checked =
        Cookies.get("Valor_Marcar_Area_Que_Vai_Modificar_Ativa");
      Valor_Marcar_Area_Que_Vai_Modificar_Ativa = Cookies.get(
        "Valor_Marcar_Area_Que_Vai_Modificar_Ativa"
      );
    }
  }

  if (Cookies.get("Valor_Sub_Configuracoes_Cor_Border_Vizualizacao")) {
    document.getElementById("Sub_Configuracao_Cor_Border_Vizualizacao").value =
      Cookies.get("Valor_Sub_Configuracoes_Cor_Border_Vizualizacao");
    Valor_Sub_Configuracoes_Cor_Border_Vizualizacao = Cookies.get(
      "Valor_Sub_Configuracoes_Cor_Border_Vizualizacao"
    );
  }

  if (Cookies.get("Valor_Sub_Configuracoes_Tamanho_Border_Vizualizacao")) {
    document.getElementById(
      "Sub_Configuracao_Tamanho_Border_Vizualizacao"
    ).value = Cookies.get(
      "Valor_Sub_Configuracoes_Tamanho_Border_Vizualizacao"
    );
    Valor_Sub_Configuracoes_Tamanho_Border_Vizualizacao = Cookies.get(
      "Valor_Sub_Configuracoes_Tamanho_Border_Vizualizacao"
    );
  }

  if (
    Cookies.get("Valor_Sub_Configuracoes_Marcacao_Exterior_Border_Vizualizacao")
  ) {
    if (
      Cookies.get(
        "Valor_Sub_Configuracoes_Marcacao_Exterior_Border_Vizualizacao"
      ) == "false"
    ) {
    } else {
      document.getElementById(
        "Sub_Configuracao_Marcacao_Exterior_Border_Vizualizacao"
      ).checked = Cookies.get(
        "Valor_Sub_Configuracoes_Marcacao_Exterior_Border_Vizualizacao"
      );
      Valor_Sub_Configuracoes_Marcacao_Exterior_Border_Vizualizacao =
        Cookies.get(
          "Valor_Sub_Configuracoes_Marcacao_Exterior_Border_Vizualizacao"
        );
    }
  }

  Alterar_Modificacoes_Das_Configuracoes_Do_Programa_Ajudante();
}
//#endregion _Função_

//#region _Função_ Restaurar para padrão as configurações em cookies
function Restaurar_Configuracoes_Em_Cookies() {
  document.getElementById(
    "Tipo_De_Configuracao_De_Atualizacao_De_Alteracoes"
  ).checked = false;
  document.getElementById("Tipo_De_Configuracao_De_Input_Cor").value =
    "Cor_Tipo_RGB";
  document.getElementById("Tipo_De_Configuracao_De_Tamanho_Geral").value = "1";
  document.getElementById(
    "Tipo_De_Configuracao_De_Tipo_De_Fonte_Da_Interface"
  ).value = "consolas";
  document.getElementById(
    "Salvamento_De_Modificacoes_Dentro_Do_Site"
  ).checked = false;
  document.getElementById(
    "Marcar_Area_Que_Vai_Modificar_Ativa"
  ).checked = false;
  document.getElementById("Sub_Configuracao_Cor_Border_Vizualizacao").value =
    "#0000ff";
  document.getElementById(
    "Sub_Configuracao_Tamanho_Border_Vizualizacao"
  ).value = 5;
  document.getElementById(
    "Sub_Configuracao_Marcacao_Exterior_Border_Vizualizacao"
  ).checked = false;

  Salvar_Configuracoes_Em_Cookies();
  Vizualizar_Configuracoes_Do_Ajudante_De_Programacao();
}
//#endregion _Função_

//#region _Função_ Restaurar para padrão a configuração Atualização Automatica
function Redefinir_Para_Configuracao_Padrao_Atualizacao() {
  document.getElementById(
    "Tipo_De_Configuracao_De_Atualizacao_De_Alteracoes"
  ).checked = false;
}
//#endregion _Função_

//#region _Função_ Restaurar para padrão a configuração Configurações de cor
function Redefinir_Para_Configuracao_Padrao_Tipo_Cor() {
  document.getElementById("Tipo_De_Configuracao_De_Input_Cor").value =
    "Cor_Tipo_RGB";
}
//#endregion _Função_

//#region _Função_ Restaurar para padrão a configuração Tamanho da Interface
function Redefinir_Para_Configuracao_Padrao_Tamanho_Geral() {
  document.getElementById("Tipo_De_Configuracao_De_Tamanho_Geral").value = "1";
}
//#endregion _Função_

//#region _Função_ Restaurar para padrão a configuração Fonte da Interface
function Redefinir_Para_Configuracao_Padrao_Tipo_Fonte() {
  document.getElementById(
    "Tipo_De_Configuracao_De_Tipo_De_Fonte_Da_Interface"
  ).value = "consolas";
}
//#endregion _Função_

//#region _Função_ Restaurar para padrão a configuração Salvamento de Modificações
function Redefinir_Para_Configuracoes_Padrao_Salvar_Modificacoes_Do_Site() {
  document.getElementById(
    "Salvamento_De_Modificacoes_Dentro_Do_Site"
  ).checked = false;
}
//#endregion _Função_

//#region _Função_ Restaurar para padrão a configuração Marcação de área de modificação
function Marcar_Area_Que_Vai_Modificar_Ativa() {
  document.getElementById(
    "Marcar_Area_Que_Vai_Modificar_Ativa"
  ).checked = false;
}
//#endregion _Função_

//#region _Função_ Restaurar para padrão a Sub Configuracao de Definição de cor da Marcação de area modifificação
function Sub_Configuracao_Cor_Border_Vizualizacao() {
  document.getElementById("Sub_Configuracao_Cor_Border_Vizualizacao").value =
    "#0000ff";
}
//#endregion _Função_

//#region _Função_ Restaurar para padrão a Sub Configuracao de Definição de tamanho da Marcação de area modifificação
function Sub_Configuracao_Tamanho_Border_Vizualizacao() {
  document.getElementById(
    "Sub_Configuracao_Tamanho_Border_Vizualizacao"
  ).value = "5";
}
//#endregion _Função_

//#region _Função_ Restaurar para padrão a Sub Configuracao de Definição de tamanho da Marcação de area modifificação
function Sub_Configuracao_Marcacao_Exterior_Border_Vizualizacao() {
  document.getElementById(
    "Sub_Configuracao_Marcacao_Exterior_Border_Vizualizacao"
  ).checked = false;
}
//#endregion _Função_

//#region _Função_ Alterar as configurações pela mudança
function Alterar_Modificacoes_Das_Configuracoes_Do_Programa_Ajudante() {
  if (
    Valor_Configuracoes_Alteradas_De_Atualizacao_De_Alteracoes == "true" ||
    Valor_Configuracoes_Alteradas_De_Atualizacao_De_Alteracoes == true
  ) {
    Validador_De_Atualizacoes_De_Alteracoes = "Automatico";
  } else {
    Validador_De_Atualizacoes_De_Alteracoes = "Manual";
  }
  if (Valor_Configuracoes_Alteradas_De_Input_Cor == "Cor_Tipo_RGB") {
    Validador_De_Tipo_De_Cor = "RGB";
  } else if (
    Valor_Configuracoes_Alteradas_De_Input_Cor == "Cor_Tipo_Hexadecimal"
  ) {
    Validador_De_Tipo_De_Cor = "Hexadecimal";
  } else if (Valor_Configuracoes_Alteradas_De_Input_Cor == "Cor_Tipo_Escrita") {
    Validador_De_Tipo_De_Cor = "Escrita";
  }
  if (Valor_Configuracoes_Alteradas_De_Tamanho_Geral >= 1) {
    Tamanho_Geral_Da_Interface = Valor_Configuracoes_Alteradas_De_Tamanho_Geral;
  } else {
    Tamanho_Geral_Da_Interface = 1;
  }

  Fonte_Do_Display_Ajudante_Programacao =
    Tipo_De_Configuracao_De_Tipo_De_Fonte_Da_Interface;

  if (
    Valor_Configuracoes_Salvar_Modificacoes_Do_Site == "true" ||
    Valor_Configuracoes_Salvar_Modificacoes_Do_Site == true
  ) {
    Salvamento_De_Modificacoes_Dentro_Do_Site_Verdadeiro_Ou_Falso =
      "Salvar Modificacoes";
  } else {
    Salvamento_De_Modificacoes_Dentro_Do_Site_Verdadeiro_Ou_Falso =
      "Nao Salvar";
  }

  if (
    Valor_Marcar_Area_Que_Vai_Modificar_Ativa == "true" ||
    Valor_Marcar_Area_Que_Vai_Modificar_Ativa == true
  ) {
    Valor_Marcar_Area_Que_Vai_Modificar_Ativa_Explicacao = "Vizualizar a area";
  } else {
    Valor_Marcar_Area_Que_Vai_Modificar_Ativa_Explicacao =
      "Nao Vizualizar a area";
  }

  Valor_De_Cor_Do_Border_De_Marcacao =
    Valor_Sub_Configuracoes_Cor_Border_Vizualizacao;

  Valor_De_Tamanho_Do_Border_De_Marcacao =
    Valor_Sub_Configuracoes_Tamanho_Border_Vizualizacao;

  console.log(
    "Valor: " + Valor_Sub_Configuracoes_Marcacao_Exterior_Border_Vizualizacao
  );

  if (
    Valor_Sub_Configuracoes_Marcacao_Exterior_Border_Vizualizacao == "true" ||
    Valor_Sub_Configuracoes_Marcacao_Exterior_Border_Vizualizacao == true
  ) {
    Verificador_De_Tipo_De_Marcacao = "Exterior";
  } else {
    Verificador_De_Tipo_De_Marcacao = "Interior";
  }

  Adicionar_Sub_Configuracoes_De_Vizualizar_Area_Que_Vai_Ser_Alterada();
  Alterar_Tipo_De_Configuracao_De_Cor();
  Controlar_Tamanho_Atraves_Das_Configuracoes_Do_Programa_Ajudante();
  Alterar_Fonte_De_Acordo_Com_Configuracao();
}
//#endregion _Função_

//#region _Função_ Alterar tamanho geral do programa ajudante
function Controlar_Tamanho_Atraves_Das_Configuracoes_Do_Programa_Ajudante() {
  if (Tamanho_Geral_Da_Interface > 1.1) {
    Tamanho_Geral_Da_Interface = Tamanho_Geral_Da_Interface / 10 + 1;
  }

  var Alterar_Configuracao_De_Tamanho_De_Zoom_Interface =
    document.querySelector(".Pre_Programa_Ajudante");

  var Elemento_Filhos_Do_Programa_Ajudante_Para_Aumentar_Tamanho_Input =
    Alterar_Configuracao_De_Tamanho_De_Zoom_Interface.querySelectorAll("input");

  var Elemento_Filhos_Do_Programa_Ajudante_Para_Aumentar_Tamanho_Select =
    Alterar_Configuracao_De_Tamanho_De_Zoom_Interface.querySelectorAll(
      "select"
    );

  var Elemento_Filhos_Do_Programa_Ajudante_Para_Aumentar_Tamanho_Textearea =
    Alterar_Configuracao_De_Tamanho_De_Zoom_Interface.querySelectorAll(
      "textarea"
    );

  var Elemento_Filhos_Do_Programa_Ajudante_Para_Aumentar_Tamanho_Button =
    Alterar_Configuracao_De_Tamanho_De_Zoom_Interface.querySelector(
      ".Botao_Envio"
    );

  Alterar_Configuracao_De_Tamanho_De_Zoom_Interface.style.fontSize =
    18 * Tamanho_Geral_Da_Interface;

  Elemento_Filhos_Do_Programa_Ajudante_Para_Aumentar_Tamanho_Button.style.zoom =
    Tamanho_Geral_Da_Interface;

  for (
    var i = 0;
    i <
    Elemento_Filhos_Do_Programa_Ajudante_Para_Aumentar_Tamanho_Select.length;
    i++
  ) {
    Elemento_Filhos_Do_Programa_Ajudante_Para_Aumentar_Tamanho_Select[
      i
    ].style.fontSize = 14.3 * Tamanho_Geral_Da_Interface + "px";
  }

  for (
    var i = 0;
    i < Elemento_Filhos_Do_Programa_Ajudante_Para_Aumentar_Tamanho_Input.length;
    i++
  ) {
    Elemento_Filhos_Do_Programa_Ajudante_Para_Aumentar_Tamanho_Input[
      i
    ].style.fontSize = 14.3 * Tamanho_Geral_Da_Interface + "px";
  }

  for (
    var i = 0;
    i <
    Elemento_Filhos_Do_Programa_Ajudante_Para_Aumentar_Tamanho_Textearea.length;
    i++
  ) {
    Elemento_Filhos_Do_Programa_Ajudante_Para_Aumentar_Tamanho_Textearea[
      i
    ].style.fontSize = 14.3 * Tamanho_Geral_Da_Interface + "px";
  }
}
//#endregion _Função_

//#region _Função_ Alterar tipo de input para cor configuração
function Alterar_Tipo_De_Configuracao_De_Cor() {
  var Tipo_Da_Modificacao_Para_Alteracao_Cor_Color = document.querySelector(
    "#Div_" + "color" + "_Valor"
  );
  var Tipo_Da_Modificacao_Para_Alteracao_Cor_Background_Color =
    document.querySelector("#Div_" + "backgroundColor" + "_Valor");

  if (Validador_De_Tipo_De_Cor == "RGB") {
    Tipo_Da_Modificacao_Para_Alteracao_Cor_Color.type = "color";
    Tipo_Da_Modificacao_Para_Alteracao_Cor_Background_Color.type = "color";
  }
  if (Validador_De_Tipo_De_Cor == "Hexadecimal") {
    Tipo_Da_Modificacao_Para_Alteracao_Cor_Color.type = "text";
    Tipo_Da_Modificacao_Para_Alteracao_Cor_Color.value = "#000000";
    Tipo_Da_Modificacao_Para_Alteracao_Cor_Background_Color.type = "text";
    Tipo_Da_Modificacao_Para_Alteracao_Cor_Background_Color.value = "#000000";
  }
  if (Validador_De_Tipo_De_Cor == "Escrita") {
    Tipo_Da_Modificacao_Para_Alteracao_Cor_Color.type = "text";
    Tipo_Da_Modificacao_Para_Alteracao_Cor_Color.value = "";
    Tipo_Da_Modificacao_Para_Alteracao_Cor_Background_Color.type = "text";
    Tipo_Da_Modificacao_Para_Alteracao_Cor_Background_Color.value = "";
  }
}

//#endregion _Função_

//#region _Função_ Alterar a fonte do ajudante de programacao de acordo com o usuario
function Alterar_Fonte_De_Acordo_Com_Configuracao() {
  var Corpo_Do_Ajudante_De_Programacao_Para_Fonte = document.querySelector(
    ".Pre_Programa_Ajudante"
  );

  var Alterar_Fontes_Dos_Botoes_Configuracoes =
    Corpo_Do_Ajudante_De_Programacao_Para_Fonte.querySelectorAll("button");

  Corpo_Do_Ajudante_De_Programacao_Para_Fonte.style.fontFamily =
    Fonte_Do_Display_Ajudante_Programacao;

  for (var i = 0; i < Alterar_Fontes_Dos_Botoes_Configuracoes.length; i++) {
    Alterar_Fontes_Dos_Botoes_Configuracoes[i].style.fontFamily =
      Fonte_Do_Display_Ajudante_Programacao;
  }
}
//#endregion _Função_

//#region _Função_ Alterar se vai vizualizar ou não a área que vai modificar
function Vizualizacao_De_Area_Que_Vai_Modificar() {
  //#region Criando a div que vai receber o destaque da modificação
  Div_Para_Ser_Adicionada = document.createElement("div");
  Div_Para_Ser_Adicionada.classList.add(
    "Mudar_A_Cor_Da_Borda_Para_Vizualizacao_Desse_Elemento"
  );
  Div_Para_Ser_Adicionada.style.border =
    Valor_De_Cor_Do_Border_De_Marcacao +
    " " +
    Valor_De_Tamanho_Do_Border_De_Marcacao +
    "px " +
    "solid";

  Div_Para_Ser_Adicionada.style.padding = "20px";
  //#endregion

  //#region Criando a div que vai puxar as divs de destaque já existentes para remover
  Div_Para_Remocao_De_Visualizacao = document.querySelectorAll(
    ".Mudar_A_Cor_Da_Borda_Para_Vizualizacao_Desse_Elemento"
  );
  //#endregion

  if (Contagem_Para_Limpar_O_Anterior !== 0) {
    for (var i = 0; i < Div_Para_Remocao_De_Visualizacao.length; i++) {
      Div_Para_Remocao_De_Visualizacao.forEach(function (div) {
        while (div.firstChild) {
          div.parentNode.insertBefore(div.firstChild, div);
        }
        div.parentNode.removeChild(div);
      });
    }
    Contagem_Para_Limpar_O_Anterior = 0;
  }

  if (Contagem_Para_Limpar_O_Anterior_Quando_For_Tag !== 0) {
    Elemento_Modificar.forEach(function (elem) {
      elem.style.border = "";
      Contagem_Para_Limpar_O_Anterior_Quando_For_Tag = 0;
    });
  }

  //#region
  if (Contagem_Para_Limpar_O_Anterior == 0) {
    Tipo_Nome_Escolhido = document.getElementById(
      "Tipo_Modificador_Escolhido"
    ).value;
    Nome_Escolhido = document.getElementById(
      "Selecao_Aparecer_Selecionado"
    ).value;
    Elemento_Modificar;
    Tipo_Declaracao_Escolhido_Modificar = document.getElementById(
      "Tipo_Declaracao_Escolhido"
    ).value;

    //#endregion

    //#region Verificando o tipo do nome, e adicionando a variavel Elemento_Modificar
    if (Tipo_Nome_Escolhido == "Class") {
      Elemento_Modificar = document.querySelectorAll("." + Nome_Escolhido);
    } else if (Tipo_Nome_Escolhido == "Id") {
      Elemento_Modificar = document.querySelectorAll("#" + Nome_Escolhido);
    } else if (Tipo_Nome_Escolhido == "Tag") {
      Elemento_Modificar = document.querySelectorAll(Nome_Escolhido);
    }
    //#endregion

    if (
      Quantia_Existente_De_Elemento_Feitos > 0 &&
      Verificador_De_Tipo_De_Marcacao == "Interior"
    ) {
      for (
        var Numero_I = 0;
        Numero_I <= Quantia_Existente_De_Elemento_Feitos;
        Numero_I++
      ) {
        Elemento_Modificar_Salvar_Para_Recuperar_Borda.forEach(function (elem) {
          elem.style.border =
            Valor_Borda_Antiga_Para_Recuperacao_Posterior[Numero_I];
          console.log("Executado a restauração");
        });
        Quantia_Existente_De_Elemento_Feitos = 0;
      }
    }

    if (Elemento_Modificar) {
      if (
        Valor_Marcar_Area_Que_Vai_Modificar_Ativa_Explicacao ==
        "Vizualizar a area"
      ) {
        Elemento_Modificar.forEach(function (elem) {
          if (
            elem.classList !==
              "Mudar_A_Cor_Da_Borda_Para_Vizualizacao_Desse_Elemento" &&
            Tipo_Nome_Escolhido !== "Tag" &&
            Verificador_De_Tipo_De_Marcacao == "Exterior"
          ) {
            console.log("Exterior");
            elem.parentNode.insertBefore(Div_Para_Ser_Adicionada, elem);
            Div_Para_Ser_Adicionada.appendChild(elem);
            if (elem.style.border) {
              Valor_Borda_Antiga_Para_Recuperacao_Posterior[
                Quantia_Existente_De_Elemento_Feitos
              ] = elem.style.border;
              Quantia_Existente_De_Elemento_Feitos++;
            }
          } else if (
            Tipo_Nome_Escolhido == "Tag" ||
            Verificador_De_Tipo_De_Marcacao == "Interior"
          ) {
            Elemento_Modificar.forEach(function (elem) {
              if (elem.style.border) {
                Valor_Borda_Antiga_Para_Recuperacao_Posterior[
                  Quantia_Existente_De_Elemento_Feitos
                ] = elem.style.border;
              }
              elem.style.border =
                Valor_De_Cor_Do_Border_De_Marcacao +
                " " +
                Valor_De_Tamanho_Do_Border_De_Marcacao +
                "px " +
                "solid";
              console.log(
                "Quantia atual: " + Quantia_Existente_De_Elemento_Feitos
              );
              Quantia_Existente_De_Elemento_Feitos++;
            });

            Elemento_Modificar_Salvar_Para_Recuperar_Borda = Elemento_Modificar;
            Contagem_Para_Limpar_O_Anterior_Quando_For_Tag = 1;
          }
        });
      }
      if (
        Valor_Marcar_Area_Que_Vai_Modificar_Ativa_Explicacao ==
          "Nao Vizualizar a area" &&
        Quantia_Existente_De_Elemento_Feitos > 0
      ) {
        Elemento_Modificar.forEach(function (elem) {
          elem.style.border = "";
        });
      }
    }
    Contagem_Para_Limpar_O_Anterior = 1;
  }
}
//#endregion _Função_

//#region _Função_ Atualizar referencia para modificação automatica
function Atualizar_Referencia_Para_MOdificacao_Automatica() {
  Referente_Valor_Da_Modificacao = document.querySelector(
    "#Div_" + Tipo_Declaracao_Escolhido_Modificar + "_Valor"
  );
  Atualizar_Elementos_Para_Nova_Referencia_Em_Eventos();
}
//#endregion _Função_

//#region _Função_ Ativar/Atualizar elementos para nova referencia
function Atualizar_Elementos_Para_Nova_Referencia_Em_Eventos() {
  //#region Ativada por apertar enter
  if (Validador_De_Atualizacoes_De_Alteracoes == "Automatico") {
    Referente_Valor_Da_Modificacao.addEventListener(
      "keyup",
      Alterar_Estilo_Elemento_Selecionado
    );
  } else {
    Referente_Valor_Da_Modificacao.removeEventListener(
      "keyup",
      Alterar_Estilo_Elemento_Selecionado
    );
  }
  //#endregion

  //#region Ativada por perca de foco
  if (Validador_De_Atualizacoes_De_Alteracoes == "Automatico") {
    Referente_Valor_Da_Modificacao.addEventListener(
      "blur",
      Alterar_Estilo_Elemento_Selecionado
    );
  } else {
    Referente_Valor_Da_Modificacao.removeEventListener(
      "blur",
      Alterar_Estilo_Elemento_Selecionado
    );
  }
  //#endregion

  //#region Ativada por mudar o valor
  if (Validador_De_Atualizacoes_De_Alteracoes == "Automatico") {
    Referente_Valor_Da_Modificacao.addEventListener(
      "change",
      Alterar_Estilo_Elemento_Selecionado
    );
  } else {
    Referente_Valor_Da_Modificacao.removeEventListener(
      "change",
      Alterar_Estilo_Elemento_Selecionado
    );
  }
  //#endregion

  //#region Ativada por mudar o valor quando for type color
  if (Validador_De_Atualizacoes_De_Alteracoes == "Automatico") {
    Referente_Valor_Da_Modificacao.addEventListener(
      "input",
      Alterar_Estilo_Elemento_Selecionado
    );
  } else {
    Referente_Valor_Da_Modificacao.removeEventListener(
      "input",
      Alterar_Estilo_Elemento_Selecionado
    );
  }
  //#endregion
}
//#endregion _Função_

//#region _Função_ Restaurar as modificações que foram feitas antes no site
function Restaurar_As_Modificacoes_Feitas_Anteriormente_No_Site() {
  if (
    Salvamento_De_Modificacoes_Dentro_Do_Site_Verdadeiro_Ou_Falso ==
    "Salvar Modificacoes"
  ) {
    if (Cookies.get("Contagem_De_Itens_Guardados_Para_Restauracao")) {
      Contagem_De_Itens_Guardados_Para_Restauracao = Cookies.get(
        "Contagem_De_Itens_Guardados_Para_Restauracao"
      ).split(",");

      if (
        Cookies.get(
          "Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Nome_Escolhido"
        )
      ) {
        Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Nome_Escolhido =
          Cookies.get(
            "Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Nome_Escolhido"
          ).split(",");
      }

      if (
        Cookies.get(
          "Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Tipo_Nome_Escolhido"
        )
      ) {
        Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Tipo_Nome_Escolhido =
          Cookies.get(
            "Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Tipo_Nome_Escolhido"
          ).split(",");
      }

      if (
        Cookies.get(
          "Modificacoes_Salvas_Para_Restauracao_Do_Site_Tipo_De_Declaracao"
        )
      ) {
        Modificacoes_Salvas_Para_Restauracao_Do_Site_Tipo_De_Declaracao =
          Cookies.get(
            "Modificacoes_Salvas_Para_Restauracao_Do_Site_Tipo_De_Declaracao"
          ).split(",");
      }

      if (
        Cookies.get(
          "Modificacoes_Salvas_Para_Restauracao_Do_Site_Valor_Da_Declaracao"
        )
      ) {
        Modificacoes_Salvas_Para_Restauracao_Do_Site_Valor_Da_Declaracao =
          Cookies.get(
            "Modificacoes_Salvas_Para_Restauracao_Do_Site_Valor_Da_Declaracao"
          ).split(",");
      }

      for (var i = 0; i <= Contagem_De_Itens_Guardados_Para_Restauracao; i++) {
        if (
          Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Tipo_Nome_Escolhido &&
          Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Nome_Escolhido &&
          Modificacoes_Salvas_Para_Restauracao_Do_Site_Tipo_De_Declaracao &&
          Modificacoes_Salvas_Para_Restauracao_Do_Site_Valor_Da_Declaracao &&
          Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Nome_Escolhido[
            i
          ] &&
          Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Tipo_Nome_Escolhido[
            i
          ] &&
          Modificacoes_Salvas_Para_Restauracao_Do_Site_Tipo_De_Declaracao[i] &&
          Modificacoes_Salvas_Para_Restauracao_Do_Site_Valor_Da_Declaracao[i]
        ) {
          if (
            Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Tipo_Nome_Escolhido[
              i
            ] == "Class"
          ) {
            Elemento_Modificar = document.querySelectorAll(
              "." +
                Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Nome_Escolhido[
                  i
                ]
            );
          } else if (
            Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Tipo_Nome_Escolhido[
              i
            ] == "Id"
          ) {
            Elemento_Modificar = document.querySelectorAll(
              "#" +
                Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Nome_Escolhido[
                  i
                ]
            );
          } else if (
            Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Tipo_Nome_Escolhido[
              i
            ] == "Tag"
          ) {
            Elemento_Modificar = document.querySelectorAll(
              Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento_Nome_Escolhido[
                i
              ]
            );
          }

          if (
            Modificacoes_Salvas_Para_Restauracao_Do_Site_Tipo_De_Declaracao[
              i
            ] === "Alterar_Texto_innerHTML"
          ) {
            Elemento_Modificar.forEach(function (elem) {
              elem.innerHTML =
                Modificacoes_Salvas_Para_Restauracao_Do_Site_Valor_Da_Declaracao[
                  i
                ];
            });
          } else {
            Elemento_Modificar.forEach(function (elem) {
              if (elem.style) {
                elem.style[
                  Modificacoes_Salvas_Para_Restauracao_Do_Site_Tipo_De_Declaracao[
                    i
                  ]
                ] =
                  Modificacoes_Salvas_Para_Restauracao_Do_Site_Valor_Da_Declaracao[
                    i
                  ];
              }
            });
          }
        }
      }
    }
  } else {
    if (Cookies.get("Contagem_De_Itens_Guardados_Para_Restauracao")) {
      Cookies.remove("Contagem_De_Itens_Guardados_Para_Restauracao");
    }

    if (Cookies.get("Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento")) {
      Cookies.remove("Modificacoes_Salvas_Para_Restauracao_Do_Site_Elemento");
    }

    if (
      Cookies.get(
        "Modificacoes_Salvas_Para_Restauracao_Do_Site_Tipo_De_Declaracao"
      )
    ) {
      Cookies.remove(
        "Modificacoes_Salvas_Para_Restauracao_Do_Site_Tipo_De_Declaracao"
      );
    }

    if (
      Cookies.get(
        "Modificacoes_Salvas_Para_Restauracao_Do_Site_Valor_Da_Declaracao"
      )
    ) {
      Cookies.remove(
        "Modificacoes_Salvas_Para_Restauracao_Do_Site_Valor_Da_Declaracao"
      );
    }
  }

  if (Cookies.get("Ultimo_Tipo_Nome_Escolhido")) {
    document.getElementById("Tipo_Modificador_Escolhido").value = Cookies.get(
      "Ultimo_Tipo_Nome_Escolhido"
    );
  }
  if (Cookies.get("Ultimo_Nome_Escolhido")) {
    Obetendo_Class_Id_Tag();
    document.getElementById("Selecao_Aparecer_Selecionado").value = Cookies.get(
      "Ultimo_Nome_Escolhido"
    );
  }
  if (Cookies.get("Ultimo_Tipo_Declaracao_Escolhido_Modificar")) {
    document.getElementById("Tipo_Declaracao_Escolhido").value = Cookies.get(
      "Ultimo_Tipo_Declaracao_Escolhido_Modificar"
    );
    Atualizar_Tipo_Declaracao();
  }
}
//#endregion _Função_

//#region _Função_ Adicionar Sub Configurações de Vizualizar a area que vai ser alterada
function Adicionar_Sub_Configuracoes_De_Vizualizar_Area_Que_Vai_Ser_Alterada() {
  var Sub_Configuracoes_De_Vizualizar_A_Area_Alterada =
    document.querySelectorAll(
      ".Sub_Configuracao_Marcar_Area_Que_Vai_Modificar_Ativa"
    );

  if (
    Valor_Marcar_Area_Que_Vai_Modificar_Ativa == "true" ||
    Valor_Marcar_Area_Que_Vai_Modificar_Ativa == true
  ) {
    Sub_Configuracoes_De_Vizualizar_A_Area_Alterada.forEach(function (elem) {
      elem.style.display = "";
    });
  } else {
    Sub_Configuracoes_De_Vizualizar_A_Area_Alterada.forEach(function (elem) {
      elem.style.display = "none";
    });
  }
}
//#endregion _Função_

//#endregion _Função_ Principal
////---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//#region _Evento_ Principal

//#region _Evento_ Ativada por mudar o valor
Tipo_Modificador_Escolhido_Status.addEventListener(
  "change",
  Ativar_Todas_Funcoes_1
);
Nome_Escolhido_Status.addEventListener("change", Ativar_Todas_Funcoes_2);

Tipo_Declaracao_Status.addEventListener("change", Ativar_Todas_Funcoes_2);

//#endregion _Evento_

//#endregion _Evento_ Principal
////---------------------------------------------------------------------------------------------------------------------------------------------------------------------
//#region _Pós_ _Carregamento_ Principal

//#region _Pós_ _Carregamento_  Ativar funções após a pagina ser carregada
window.onload = function () {
  Restaurar_Configuracoes_Anteriores_Salvas_Em_Cookies();
  Ativar_Todas_Funcoes_1();
  Alterar_Cores_Fundo_Opcoes_Sim_Opcao_Nao();
  Restaurar_As_Modificacoes_Feitas_Anteriormente_No_Site();

  if (!Cookies.get("Tipo_De_Configuracao_De_Tipo_De_Fonte_Da_Interface")) {
    Restaurar_Configuracoes_Em_Cookies();
  }
};
//#endregion _Pós_ _Carregamento_

//#endregion _Pós_ _Carregamento_ Principal
////---------------------------------------------------------------------------------------------------------------------------------------------------------------------
