(function() {

    var colorScheme = [{
            name: 'RGB',
            colors: ['#FF0000', '#00FF00', '#0000FF']
        },
        {
            name: 'RGBGradient',
            colors: ['#FF0000', '#FF7F00', '#FFFF00', '#7FFF00', '#00FF00', '#00FF7F', '#00FFFF', '#007FFF', '#0000FF', '#7F00FF', '#FF00FF', '#FF007F']
        },
        {
            name: 'CMY',
            colors: ['#0097d7', '#e5007f', '#FFF100']
        },
        {
            name: 'CMYK',
            colors: ['#0097d7', '#e5007f', '#FFF100', '#231815']
        },
        {
            name: 'CMYGradient',
            colors: ['#0097d7', '#e5007f', '#FFF100', '#0000a0', '#00a050', '#ff5000']
        },
        {
            name: 'CMYKGradient',
            colors: ['#0097d7', '#e5007f', '#FFF100', '#231815', '#0000a0', '#00a050', '#ff5000']
        },
        {
            name: 'CMYKWGradient',
            colors: ['#0097d7', '#e5007f', '#FFF100', '#231815', '#0000a0', '#00a050', '#ff5000', '#ffffff']
        },

        {
            name: 'PopMix',
            colors: ['#FF002E', '#FA7fEA', '#000000', '#FBB009', '#018203']
        },
        {
            name: 'BlueViolet',
            colors: ['#0000a0', '#6a00ff', '#9f00ff']
        },
        {
            name: 'RedOrange',
            colors: ['#ff0000', '#ff3000', '#ff5000', '#ff7000']
        },

        {
            name: 'Mono',
            colors: ['#000000', '#ffffff']
        },
        {
            name: 'Mono3',
            colors: ['#000000', '#888888', '#ffffff']
        },
        {
            name: 'BlacktoWhite',
            colors: ['#000000', '#111111', '#222222', '#333333', '#444444', '#555555', '#666666', '#777777', '#888888', '#999999', '#aaaaaa', '#bbbbbb', '#cccccc', '#dddddd', '#eeeeee', '#ffffff']
        },
        {
            name: 'WhitetoBlack',
            colors: ['#ffffff', '#eeeeee', '#dddddd', '#cccccc', '#bbbbbb', '#aaaaaa', '#999999', '#888888', '#777777', '#666666', '#555555', '#444444', '#333333', '#222222', '#111111', '#000000']
        },
        {
            name: 'WhitetoBlue',
            colors: ['#ffffff', '#eeeeff', '#ddddff', '#ccccff', '#bbbbff', '#aaaaff', '#9999ff', '#8888ff', '#7777ff', '#6666ff', '#5555ff', '#4444ff', '#3333ff', '#2222ff', '#1111ff', '#0000ff']
        },
        {
            name: 'WhitetoBluetoBlack',
            colors: ['#ffffff', '#0000ff', '#000000']
        },
        {
            name: 'WhitetoGray',
            colors: ['#ffffff', '#eeeeee', '#dddddd']
        },

        {
            name: 'BlacktoBluetoWhite',
            colors: ['#000000', '#0000ff', '#ffffff']
        },
        {
            name: 'BluetoRed',
            colors: ['#0068b6', '#ffffff', '#d0d4d7', '#e50012']
        },
        {
            name: 'WhitetoRed',
            colors: ['#ffffff', '#ffeeee', '#ffdddd', '#ffcccc', '#ffbbbb', '#ffaaaa', '#ff9999', '#ff8888', '#ff7777', '#ff6666', '#ff5555', '#ff4444', '#ff3333', '#ff2222', '#ff1111', '#ff0000']
        },
        {
            name: 'BlacktoBlue',
            colors: ['#000000', '#000011', '#000022', '#000033', '#000044', '#000055', '#000066', '#000077', '#000088', '#000099', '#0000aa', '#0000bb', '#0000cc', '#0000dd', '#0000ee', '#0000ff']
        },
        {
            name: 'BlacktoRed',
            colors: ['#000000', '#110000', '#220000', '#330000', '#440000', '#550000', '#660000', '#770000', '#880000', '#990000', '#aa0000', '#bb0000', '#cc0000', '#dd0000', '#ee0000', '#ff0000']
        },
        {
            name: 'DolphinBlue',
            colors: ['#045c84', '#04749c', '#87b8ce', '#5395b1', '#6c9cb4']
        },
        {
            name: 'Haru',
            colors: ['#F2DADF', '#E9D6F9', '#EACEE9', '#f2dadf', '#ffefe7', '#FCEBEF', '#F8E5E9', '#F2DADF', '#E8D1D5', '#DFC7CC', '#95A6DF', '#A8B8F2', '#F1E3FC', '#FFF4EC', '#FFF0F4', '#C5D0F8', '#D4DCFB', '#D0BDDF', '#DABED9', '#ffefe7', '#F2DADF', '#E9D6F9', '#FFF1E9', '#F2DADF', '#ffefe7', ]
        },
        {
            name: 'Haru2',
            colors: ['#BF5A6C', '#73384E', '#3D3859', '#D9B7B4', '#BF2C2C', '#0D0909', '#BF848F', '#F2DADF', '#D9C5C1', '#D9C2A7', '#A64141', '#40292B', '#40172D', '#8C7783', '#D9B7B4']
        },
        {
            name: 'RetroMetro',
            colors: ['#ea5545', '#f46a9b', '#ef9b20', '#edbf33', '#ede15b', '#bdcf32', '#87bc45', '#27aeef', '#b33dc6']
        },
        {
            name: 'DutchField',
            colors: ['#e60049', '#0bb4ff', '#50e991', '#e6d800', '#9b19f5', '#ffa300', '#dc0ab4', '#b3d4ff', '#00bfa0']
        },
        {
            name: 'RiverNights',
            colors: ['#b30000', '#7c1158', '#4421af', '#1a53ff', '#0d88e6', '#00b7c7', '#5ad45a', '#8be04e', '#ebdc78']
        },
        {
            name: 'SpringPastels',
            colors: ['#fd7f6f', '#7eb0d5', '#b2e061', '#bd7ebe', '#ffb55a', '#ffee65', '#beb9db', '#fdcce5', '#8bd3c7']
        },
        {
            name: 'BluetoYellow',
            colors: ['#115f9a', '#1984c5', '#22a7f0', '#48b5c4', '#76c68f', '#a6d75b', '#c9e52f', '#d0ee11', '#d0f400']
        },
        {
            name: 'GreytoRed',
            colors: ['#d7e1ee', '#cbd6e4', '#bfcbdb', '#b3bfd1', '#a4a2a8', '#df8879', '#c86558', '#b04238', '#991f17']
        },
        {
            name: 'BlacktoPink',
            colors: ['#2e2b28', '#3b3734', '#474440', '#54504c', '#6b506b', '#ab3da9', '#de25da', '#eb44e8', '#ff80ff']
        },
        {
            name: 'Blue',
            colors: ['#0000b3', '#0010d9', '#0020ff', '#0040ff', '#0060ff', '#0080ff', '#009fff', '#00bfff', '#00ffff']
        },
        {
            name: 'BluetoRed',
            colors: ['#1984c5', '#22a7f0', '#63bff0', '#a7d5ed', '#e2e2e2', '#e1a692', '#de6e56', '#e14b31', '#c23728']
        },
        {
            name: 'OrangetoPurple',
            colors: ['#ffb400', '#d2980d', '#a57c1b', '#786028', '#363445', '#48446e', '#5e569b', '#776bcd', '#9080ff']
        },
        {
            name: 'PinkFoam',
            colors: ['#54bebe', '#76c8c8', '#98d1d1', '#badbdb', '#dedad2', '#e4bcad', '#df979e', '#d7658b', '#c80064']
        },
        {
            name: 'SalmontoAqua',
            colors: ['#e27c7c', '#a86464', '#6d4b4b', '#503f3f', '#333333', '#3c4e4b', '#466964', '#599e94', '#6cd4c5']
        },
        {
            name: 'MidnightDream',
            colors: ['#030213', '#030213', '#030213', '#030213', '#13115a', '#13115a', '#8587a8', '#30ff9c', '#1b1c34']
        },
        {
            name: 'SunsetGarden',
            colors: ['#167288', '#8cdaec', '#b45248', '#d48c84', '#a89a49', '#d6cfa2', '#3cb464', '#9bddb1', '#643c6a', '#836394']
        },
        {
            name: 'BlueNightclub',
            colors: ['#4500fe', '#581afe', '#6a33fe', '#7d4dfe', '#8f66fe', '#a280ff', '#b599ff', '#c7b3ff', '#daccff', '#ece6ff', '#ffffff']
        },
        {
            name: 'Light10',
            colors: ['#03a8a0', '#039c4b', '#66d313', '#fedf17', '#ff0984', '#21409a', '#04adff', '#e48873', '#f16623', '#f44546']
        },
        {
            name: 'Ms10',
            colors: ['#fff100', '#ff8c00', '#e81123', '#ec008c', '#68217a', '#00188f', '#00bcf2', '#00b294', '#009e49', '#bad80a']
        },
        {
            name: 'Neon6',
            colors: ['#39ff14', '#14b8ff', '#ff14e2', '#ffa500', '#ffff00', '#000000']
        },
        {
            name: 'Neon5',
            colors: ['#39ff14', '#14b8ff', '#ff14e2', '#ffa500', '#ffff00']
        },
        {
            name: 'Albers',
            colors: ['#D77186', '#61A2DA', '#6CB7DA', '#B5B5B3', '#D75725']
        },
        {
            name: 'Albrecht',
            colors: ['#171635', '#00225D', '#763262', '#CA7508', '#E9A621']
        },
        {
            name: 'Apple',
            colors: ['#F24D98', '#813B7C', '#59D044', '#F3A002', '#F2F44D']
        },
        {
            name: 'Arnoldi',
            colors: ['#C2151B', '#2021A0', '#3547B3', '#E2C43F', '#E0DCDD']
        },
        {
            name: 'Avery',
            colors: ['#F3C937', '#7B533E', '#BFA588', '#604847', '#552723']
        },
        {
            name: 'Afklint',
            colors: ['#D6CFC4', '#466CA6', '#D1AE45', '#87240E', '#040204']
        },
        {
            name: 'Basquiat',
            colors: ['#8CABD9', '#F6A7B8', '#F1EC7A', '#1D4D9F', '#F08838']
        },
        {
            name: 'Beckmann',
            colors: ['#4B3A51', '#A77A4B', '#ECC6A2', '#A43020', '#722D24']
        },
        {
            name: 'Botero',
            colors: ['#99B6BD', '#B3A86A', '#ECC9A0', '#D4613E', '#BB9568']
        },
        {
            name: 'Botticelli',
            colors: ['#7A989A', '#849271', '#C1AE8D', '#CF9546', '#C67052']
        },
        {
            name: 'Bruegel',
            colors: ['#BFBED5', '#7F9086', '#A29A68', '#676A4F', '#A63C24']
        },
        {
            name: 'Bush',
            colors: ['#529DCB', '#ECA063', '#71BF50', '#F3CC4F', '#D46934']
        },
        {
            name: 'Cassatt',
            colors: ['#1C5679', '#BBB592', '#CAC3B2', '#808C5C', '#5F4B3B']
        },
        {
            name: 'Cezanne',
            colors: ['#8399B3', '#697A55', '#C4AA88', '#B68E52', '#8C5B28']
        },
        {
            name: 'Chagall',
            colors: ['#3F6F76', '#69B7CE', '#C65840', '#F4CE4B', '#62496F']
        },
        {
            name: 'Coolidge',
            colors: ['#204035', '#4A7169', '#BEB59C', '#735231', '#49271B']
        },
        {
            name: 'Dali',
            colors: ['#40798C', '#BCA455', '#BFB37F', '#805730', '#514A2E']
        },
        {
            name: 'Davinci',
            colors: ['#C8B272', '#A88B4C', '#A0A584', '#697153', '#43362A']
        },
        {
            name: 'Davis',
            colors: ['#293757', '#568D4B', '#D5BB56', '#D26A1B', '#A41D1A']
        },
        {
            name: 'Dechirico',
            colors: ['#27403D', '#48725C', '#212412', '#F3E4C2', '#D88F2E']
        },
        {
            name: 'Degas',
            colors: ['#BDB592', '#ACBBC5', '#9E8D3D', '#8C4F36', '#2C2D2C']
        },
        {
            name: 'Delaunay',
            colors: ['#4368B6', '#78A153', '#DEC23B', '#E4930A', '#C53211']
        },
        {
            name: 'Demuth',
            colors: ['#E4AF79', '#DF9C41', '#AF7231', '#923621', '#2D2A28']
        },
        {
            name: 'Diebenkorn',
            colors: ['#2677A5', '#639BC1', '#639BC1', '#90A74A', '#5D8722']
        },
        {
            name: 'Dix',
            colors: ['#1E1D20', '#B66636', '#547A56', '#BDAE5B', '#515A7C']
        },
        {
            name: 'Duchamp',
            colors: ['#D0CEC2', '#7BAA80', '#4B6B5E', '#BF9A41', '#980019']
        },
        {
            name: 'Durer',
            colors: ['#657359', '#9AA582', '#8B775F', '#D7C9BE', '#F1E4DB']
        },
        {
            name: 'Ernst',
            colors: ['#91323A', '#3A4960', '#D7C969', '#6D7345', '#554540']
        },
        {
            name: 'Escher',
            colors: ['#C1395E', '#AEC17B', '#F0CA50', '#E07B42', '#89A7C2']
        },
        {
            name: 'Feeley',
            colors: ['#2C458D', '#E4DFD9', '#425B4F', '#EBAD30', '#BF2124']
        },
        {
            name: 'Feitelson',
            colors: ['#202221', '#661E2A', '#AB381B', '#EAD4A3', '#E3DED8']
        },
        {
            name: 'Frankenthaler',
            colors: ['#5D7342', '#D7AE04', '#ECD7B8', '#A58B8C', '#272727']
        },
        {
            name: 'Freud',
            colors: ['#E1D2BD', '#A77E5E', '#2D291D', '#85868B', '#83774D']
        },
        {
            name: 'Frost',
            colors: ['#EF5950', '#8D5A78', '#C66F26', '#FB6B22', '#DC2227']
        },
        {
            name: 'Gauguin',
            colors: ['#21344F', '#8AAD05', '#E2CE1B', '#DF5D22', '#E17976']
        },
        {
            name: 'Geiger',
            colors: ['#FF62A9', '#F77177', '#FA9849', '#FE6E3A', '#FD5A35']
        },
        {
            name: 'Hofmann',
            colors: ['#1A6DED', '#2C7CE6', '#145CBF', '#162B3D', '#F9ECE4']
        },
        {
            name: 'Hiroshige',
            colors: ['#606F6D', '#19385D', '#D3C5B1', '#977968', '#7E0306']
        },
        {
            name: 'Hokusai',
            colors: ['#1F284C', '#2D4472', '#6E6352', '#D9CCAC', '#ECE2C6']
        },
        {
            name: 'HokusaiBlue',
            colors: ['#023059', '#459DBF', '#87BF60', '#D9D16A', '#F2F2F2']
        },
        {
            name: 'Homer',
            colors: ['#A9944A', '#F2D9B3', '#725435', '#8E9DBF', '#BD483C']
        },
        {
            name: 'Hopper',
            colors: ['#67161C', '#3F6148', '#DBD3A4', '#A4804C', '#4B5F80']
        },
        {
            name: 'Indiana',
            colors: ['#2659D8', '#1C6FF3', '#5EBC4E', '#53A946', '#F24534']
        },
        {
            name: 'Ikko',
            colors: ['#7E68A8', '#85D1F3', '#47A38B', '#F0BC49', '#F14F3C']
        },
        {
            name: 'Jean',
            colors: ['#51394E', '#F6DE7D', '#C8AF8A', '#658385', '#B04838']
        },
        {
            name: 'Jakuchu',
            colors: ['#db0f3d', '#313438', '#9b8a66', '#adada8', '#664b40']
        },
        {
            name: 'Johns',
            colors: ['#4B6892', '#F9E583', '#FED43F', '#F6BD28', '#BE4C46']
        },
        {
            name: 'Kahlo',
            colors: ['#121510', '#6D8325', '#D6CFB7', '#E5AD4F', '#BD5630']
        },
        {
            name: 'Kandinsky',
            colors: ['#5D7388', '#A08F27', '#E5A729', '#4F4D1D', '#8AAE8A']
        },
        {
            name: 'Klee',
            colors: ['#A7B3CD', '#E6DA9E', '#676155', '#CDB296', '#CCD7AD']
        },
        {
            name: 'Klein',
            colors: ['#344CB9', '#1B288A', '#0F185B', '#D7C99A', '#F2E4C7']
        },
        {
            name: 'Klimt',
            colors: ['#4A5FAB', '#609F5C', '#E3C454', '#A27CBA', '#B85031']
        },
        {
            name: 'Koons',
            colors: ['#D6AABE', '#B69F7F', '#ECD9AD', '#76A9A2', '#A26775']
        },
        {
            name: 'Korin',
            colors: ['#334952', '#46734a', '#5f6568', '#b4894f', '#6a5c42']
        },
        {
            name: 'Krasner',
            colors: ['#333333', '#D1B817', '#2A2996', '#B34325', '#C8CCC6']
        },
        {
            name: 'Kusama',
            colors: ['#FFFFFF', '#da1420', '#FFFFFF', '#da1420', '#FFFFFF']
        },
        {
            name: 'Lawrence',
            colors: ['#614671', '#BE994A', '#C8B595', '#BD4335', '#8B3834']
        },
        {
            name: 'LeWitt',
            colors: ['#0A71B6', '#F9C40A', '#190506', '#EB5432', '#EAF2F0']
        },
        {
            name: 'Lichtenstein',
            colors: ['#3229AD', '#BC000E', '#E7CFB7', '#FFEC04', '#090109']
        },
        {
            name: 'Malevich',
            colors: ['#151817', '#001A56', '#197C3F', '#D4A821', '#C74C25']
        },
        {
            name: 'Manet',
            colors: ['#6486AD', '#2D345D', '#D9BE7F', '#5A3A26', '#C6A490']
        },
        {
            name: 'Magritte',
            colors: ['#B60614', '#3A282F', '#909018', '#E3BFA1', '#EE833E']
        },
        {
            name: 'Masaccio',
            colors: ['#0E2523', '#324028', '#C26B61', '#5A788D', '#DE7944']
        },
        {
            name: 'Michelangelo',
            colors: ['#42819F', '#86AA7D', '#CBB396', '#555234', '#4D280F']
        },
        {
            name: 'Miro',
            colors: ['#C04759', '#3B6C73', '#383431', '#F1D87F', '#EDE5D2']
        },
        {
            name: 'Modigliani',
            colors: ['#1D2025', '#45312A', '#7E2F28', '#202938', '#D58E40']
        },
        {
            name: 'Mondrian',
            colors: ['#EAEFE9', '#E70503', '#000591', '#FDDE06', '#050103']
        },
        {
            name: 'Monet',
            colors: ['#184430', '#548150', '#DEB738', '#734321', '#852419'],
        },
        {
            name: 'Munch',
            colors: ['#5059A1', '#EFC337', '#1F386E', '#D1AE82', '#BE3B2C']
        },
        {
            name: 'Vivid',
            colors: ['#F20F79', '#0583F2', '#83A603', '#D9B504', '#F20505']
        },
        {
            name: 'Newman',
            colors: ['#442327', '#C0BC98', '#A6885D', '#8A3230', '#973B2B']
        },
        {
            name: 'Noland',
            colors: ['#D0D8CD', '#586180', '#E2AC29', '#1A1915', '#E6E1CE']
        },
        {
            name: 'Okeeffe',
            colors: ['#0E122D', '#182044', '#51628E', '#91A1BA', '#AFD0C9']
        },
        {
            name: 'Oldenburg',
            colors: ['#95B1C9', '#263656', '#698946', '#F8D440', '#C82720']
        },
        {
            name: 'Picasso',
            colors: ['#ff793f', '#58a142', '#cc2323', '#b969fd', '#ffae14']
        },
        {
            name: 'PicassoBlue',
            colors: ['#4df4e8', '#55a4df', '#378ec3', '#3246d8', '#2200ff']
        },
        {
            name: 'Pollock',
            colors: ['#e7ac2a', '#a44a28', '#a4a2ad', '#1f1724', '#e6dfcd']
        },
        {
            name: 'Prince',
            colors: ['#735BCC', '#6650B4', '#59449C', '#4B3984', '#3E2D6C']
        },
        {
            name: 'Quidor',
            colors: ['#B79A59', '#826C37', '#54442F', '#DBCEAF', '#C4AA52']
        },
        {
            name: 'Ramos',
            colors: ['#C13E43', '#376EA5', '#565654', '#F9D502', '#E7CA6B']
        },
        {
            name: 'Rand',
            colors: ['#BF2633', '#080C26', '#1A3073', '#3658BF', '#49A646']
        },
        {
            name: 'Redon',
            colors: ['#695B8F', '#B26C61', '#C2AF46', '#4D5E30', '#8B1F1D']
        },
        {
            name: 'Rembrandt',
            colors: ['#DBC99A', '#A68329', '#5B5224', '#8A350C', '#090A04']
        },
        {
            name: 'Renoir',
            colors: ['#2B5275', '#A69F55', '#F1D395', '#FFFBDD', '#D16647']
        },
        {
            name: 'Riley',
            colors: ['#FAB9AC', '#7BBC53', '#DE6736', '#67C1EC', '#E6B90D']
        },
        {
            name: 'Rosenquist',
            colors: ['#E25D75', '#3F4C8C', '#6A79B0', '#D7BC1F', '#DCCFAB']
        },
        {
            name: 'Rothko',
            colors: ['#E49A16', '#E19713', '#D67629', '#DA6E2E', '#D85434']
        },
        {
            name: 'Sargent',
            colors: ['#B43A35', '#3E501E', '#F8F2F4', '#6B381D', '#20242D']
        },
        {
            name: 'Schlemmer',
            colors: ['#3A488A', '#8785B2', '#DABD61', '#D95F30', '#BE3428']
        },
        {
            name: 'Seurat',
            colors: ['#3F3F63', '#808EB7', '#465946', '#8C9355', '#925E48']
        },
        {
            name: 'Skoglund',
            colors: ['#D7F96E', '#457D24', '#879387', '#E1C39F', '#394835']
        },
        {
            name: 'Tchelitchew',
            colors: ['#AC2527', '#F8CC5A', '#5C8447', '#61221A', '#2B4868']
        },
        {
            name: 'Turner',
            colors: ['#F1ECCE', '#9EA3B5', '#E9D688', '#A85835', '#AE8045'],
        },
        {
            name: 'Twombly',
            colors: ['#F2788F', '#F591EA', '#F0C333', '#F5C2AF', '#F23B3F']
        },
        {
            name: 'Ulrich',
            colors: ['#FDDDAB', '#E7A974', '#A87250', '#7B533D', '#6A4531']
        },
        {
            name: 'Vandoesburg',
            colors: ['#BD748F', '#3D578E', '#BFAB68', '#DAD7D0', '#272928']
        },
        {
            name: 'Vaneyck',
            colors: ['#3C490C', '#3B5B71', '#262121', '#7C6C4E', '#6C2B23']
        },
        {
            name: 'Vangogh',
            colors: ['#1A3431', '#2B41A7', '#6283C8', '#CCC776', '#C7AD24']
        },
        {
            name: 'Varo',
            colors: ['#C8DAAD', '#989E53', '#738D60', '#DEBC31', '#9D471A']
        },
        {
            name: 'Velazquez',
            colors: ['#413A2C', '#241F1A', '#C5B49B', '#A57F5B', '#5C351E']
        },
        {
            name: 'Vermeer',
            colors: ['#0C0B10', '#707DA6', '#CCAD9D', '#B08E4A', '#863B34']
        },
        {
            name: 'Warhol',
            colors: ['#F26386', '#F588AF', '#A4D984', '#FCBC52', '#FD814E']
        },
        {
            name: 'Wood',
            colors: ['#A6BDB0', '#8B842F', '#41240B', '#9C4823', '#D6AA7E']
        },
        {
            name: 'Xanto',
            colors: ['#2C6AA5', '#D9AE2C', '#DDC655', '#D88C27', '#64894D']
        },
        {
            name: 'Youngerman',
            colors: ['#59A55D', '#EFDB56', '#7D9DC6', '#ECA23F', '#CA4D2A']
        },
        {
            name: 'Yokoo',
            colors: ['#0d0d0d', '#c73131', '#1b8be7', '#b7bcc4', '#f8e744']
        },
        {
            name: 'Zerbe',
            colors: ['#46734F', '#CAAB6C', '#D0CCAF', '#617F97', '#9A352D']
        },
        {
            name: 'VintageEarth',
            colors: ['#000000', '#d55a3a', '#2a5c8a', '#7e7d14', '#dbdac9']
        },
        {
            name: 'VintageSky',
            colors: ['#dbdac9', '#d55a3a', '#2a5c8a', '#b47b8c', '#7e7d14']
        },

        {
            name: 'VintageDawn',
            colors: ['#dbdac9', '#d55a3a', '#2a5c8a']
        },
        {
            name: 'VintageDusk',
            colors: ['#dbdac9', '#d55a3a', '#7e7d14']
        },
        {
            name: 'VintageWine',
            colors: ['#6b5c6e', '#4a2839', '#d9574a']
        },
        {
            name: 'SunsetSail',
            colors: ['#ff7a5a', '#765aa6', '#fee7bc', '#515e8c', '#ffc64a', '#b460a6', '#ffffff', '#4781c1']
        },
        {
            name: 'TwilightDream',
            colors: ['#ae5d9d', '#f1e8bc', '#ef8fa3', '#f7c047', '#58c9ed', '#f77150']
        },
        {
            name: 'SkyMorning',
            colors: ['#f77656', '#f7f7f7', '#efc545', '#dfe0e2', '#3c70bd', '#66bee4']
        },
        {
            name: 'ForestEmber',
            colors: ['#395e54', '#e77b4d', '#050006', '#e55486']
        },
        {
            name: 'DesertStone',
            colors: ['#809498', '#d3990e', '#000000', '#ecddc5']
        },
        {
            name: 'MossWood',
            colors: ['#ecddc5', '#79b27b', '#000000', '#ac6548']
        },
        {
            name: 'MeadowGold',
            colors: ['#f3cb4d', '#f2f5e3', '#20191b', '#67875c']
        },
        {
            name: 'AutumnOak',
            colors: ['#c37c2b', '#f6ecce', '#000000', '#386a7a']
        },
        {
            name: 'HarborDusk',
            colors: ['#596f7e', '#eae6c7', '#463c21', '#f4cb4c']
        },
        {
            name: 'TwilightRose',
            colors: ['#c75669', '#000000', '#11706a']
        },
        {
            name: 'DesertSun',
            colors: ['#e9dcad', '#143331', '#ffc000']
        },
        {
            name: 'ForestPath',
            colors: ['#c47c2b', '#5f5726', '#000000', '#7e8a84']
        },
        {
            name: 'AutumnSpice',
            colors: ['#c15e1f', '#e4a13a', '#000000', '#4d545a']
        },
        {
            name: 'OceanMist',
            colors: ['#4bae8c', '#d0c1a0', '#2d3538']
        },
        {
            name: 'SunsetPlum',
            colors: ['#f6d700', '#f2d692', '#000000', '#5d3552']
        },
        {
            name: 'RoseGarden',
            colors: ['#c65f75', '#d3990e', '#000000', '#597e7a']
        },
        {
            name: 'CoralNight',
            colors: ['#dd614a', '#f5cedb', '#1a1e4f']
        },
        {
            name: 'GardenBreeze',
            colors: ['#8bc9c3', '#ffae43', '#ea432c', '#228345', '#d1d7d3', '#524e9c', '#9dc35e', '#f0a1a1']
        },
        {
            name: 'SummerLight',
            colors: ['#8bc9c3', '#ffae43', '#ea432c', '#524e9c']
        },
        {
            name: 'MeadowBloom',
            colors: ['#8bc9c3', '#ffae43', '#ea432c', '#524e9c', '#f0a1a1', '#228345']
        },
        {
            name: 'TwilightMist',
            colors: ['#ffae43', '#ea432c', '#524e9c', '#f0a1a1']
        },
        {
            name: 'Empusa',
            colors: ['#c92a28', '#e69301', '#1f8793', '#13652b', '#e7d8b0', '#48233b', '#e3b3ac']
        },
        {
            name: 'Delphi',
            colors: ['#475b62', '#7a999c', '#2a1f1d', '#fbaf3c', '#df4a33', '#f0e0c6', '#af592c']
        },
        {
            name: 'Mably',
            colors: ['#13477b', '#2f1b10', '#d18529', '#d72a25', '#e42184', '#138898', '#9d2787', '#7f311b']
        },
        {
            name: 'Nowak',
            colors: ['#e85b30', '#ef9e28', '#c6ac71', '#e0c191', '#3f6279', '#ee854e', '#180305']
        },
        {
            name: 'Jupiter',
            colors: ['#c03a53', '#edd09e', '#aab5af', '#023629', '#eba735', '#8e9380', '#6c4127']
        },
        {
            name: 'Hersche',
            colors: ['#df9f00', '#1f6f50', '#8e6d7f', '#da0607', '#a4a5a7', '#d3d1c3', '#42064f', '#25393a']
        },
        {
            name: 'Cherfi',
            colors: ['#99cb9f', '#cfb610', '#d00701', '#dba78d', '#2e2c1d', '#bfbea2', '#d2cfaf']
        },
        {
            name: 'Harvest',
            colors: ['#313a42', '#9aad2e', '#f0ae3c', '#df4822', '#8eac9b', '#cc3d3f', '#ec8b1c', '#1b9268']
        },
        {
            name: 'Honey',
            colors: ['#f14d42', '#f4fdec', '#4fbe5d', '#265487', '#f6e916', '#f9a087', '#2e99d6']
        },
        {
            name: 'Jungle',
            colors: ['#adb100', '#e5f4e9', '#f4650f', '#4d6838', '#cb9e00', '#689c7d', '#e2a1a8', '#151c2e']
        },
        {
            name: 'Skyspider',
            colors: ['#f4b232', '#f2dbbd', '#01799c', '#e93e48', '#0b1952', '#006748', '#ed817d']
        },
        {
            name: 'Atlas',
            colors: ['#5399b1', '#f4e9d5', '#de4037', '#ed942f', '#4e9e48', '#7a6e62']
        },
        {
            name: 'Giftcard',
            colors: ['#FBF5E9', '#FF514E', '#FDBC2E', '#4561CC', '#2A303E', '#6CC283', '#A71172', '#238DA5', '#9BD7CB', '#231E58', '#4E0942']
        },
        {
            name: 'Giftcard_sub',
            colors: ['#FBF5E9', '#FF514E', '#FDBC2E', '#4561CC', '#2A303E', '#6CC283', '#238DA5', '#9BD7CB']
        },
        {
            name: 'AutumnEmber',
            colors: ['#ec5526', '#f4ac12', '#9ebbc1', '#f7f4e2']
        },
        {
            name: 'CoastalMorning',
            colors: ['#eb5627', '#eebb20', '#4e9eb8', '#f7f5d0']
        },
        {
            name: 'SunsetCoral',
            colors: ['#e95145', '#f8b917', '#b8bdc1', '#ffb2a2']
        },
        {
            name: 'OceanGlow',
            colors: ['#e95145', '#f6bf7a', '#589da1', '#f5d9bc']
        },
        {
            name: 'BlossomShade',
            colors: ['#ff6555', '#ffb58f', '#d8eecf', '#8c4b47', '#bf7f93']
        },
        {
            name: 'SandDunes',
            colors: ['#f75952', '#ffce84', '#74b7b2', '#f6f6f6', '#b17d71']
        },
        {
            name: 'MorningPress',
            colors: ['#ee8067', '#f3df76', '#00a9c0', '#f7ab76']
        },
        {
            name: 'TechSunset',
            colors: ['#f0865c', '#f2b07b', '#6bc4d2', '#1a3643']
        },
        {
            name: 'SkyJourney',
            colors: ['#fe765a', '#ffb468', '#4b588f', '#faf1e0']
        },
        {
            name: 'CityDawn',
            colors: ['#e76c4a', '#f0d967', '#7f8cb6', '#1daeb1', '#ef9640']
        },
        {
            name: 'PlaygroundSunset',
            colors: ['#f04924', '#fcce09', '#408ac9']
        },
        {
            name: 'DawnMeadow',
            colors: ['#f8c3df', '#f2e420', '#28b3d0', '#648731', '#ef6a7d']
        },
        {
            name: 'GardenFresh',
            colors: ['#ca3122', '#e5af16', '#4a93a2', '#0e7e39', '#e2b9bd']
        },
        {
            name: 'SpringBloom',
            colors: ['#f0afb7', '#f6bc12', '#1477bb', '#41bb9b']
        },
        {
            name: 'BirdSong',
            colors: ['#fc3032', '#fed530', '#33c3fb', '#ff7bac', '#fda929']
        },
        {
            name: 'WildSpirit',
            colors: ['#e72e81', '#f0bf36', '#3056a2']
        },
        {
            name: 'RiverDream',
            colors: ['#f13274', '#eed03e', '#405e7f', '#19a198']
        },
        {
            name: 'MeadowJoy',
            colors: ['#ff7bac', '#ff921e', '#3ea8f5', '#7ac943']
        },
        {
            name: 'StoneWolf',
            colors: ['#e51c39', '#f1b844', '#36c4b7', '#666666']
        },
        {
            name: 'DesertFlame',
            colors: ['#d24c23', '#7ba6bc', '#f0c667', '#ede2b3', '#672b35', '#142a36']
        },
        {
            name: 'SoftCoral',
            colors: ['#e8dccc', '#e94641', '#eeaeae']
        },
        {
            name: 'TerracottaDawn',
            colors: ['#e3937b', '#d93f1d', '#090d15', '#e6cca7']
        },
        {
            name: 'WoodlandFire',
            colors: ['#d03718', '#292b36', '#33762f', '#ead7c9', '#ce7028', '#689d8d']
        },
        {
            name: 'AutumnGrove',
            colors: ['#de3f1a', '#de9232', '#007158', '#e6cdaf', '#869679']
        },
        {
            name: 'HarvestMeadow',
            colors: ['#a87c2a', '#bdc9b1', '#f14616', '#ecbfaf', '#017724', '#0e2733', '#2b9ae9']
        },
        {
            name: 'SunsetForest',
            colors: ['#d57846', '#dfe0cc', '#de442f', '#e7d3c5', '#5ec227', '#302f35', '#63bdb3']
        },
        {
            name: 'CrimsonDusk',
            colors: ['#c91619', '#fdecd2', '#f4a000', '#4c2653']
        },
        {
            name: 'SunsetShores',
            colors: ['#ea510e', '#ffd203', '#0255a3', '#039177', '#111111']
        },
        {
            name: 'SpringTwilight',
            colors: ['#ea663f', '#f9cc27', '#84afd7', '#7ca994', '#f1bbc9', '#242424']
        },
        {
            name: 'CoastalDawn',
            colors: ['#ea5b19', '#f8c9b9', '#137661', '#2a2a2a']
        },
        {
            name: 'Frozen-rose',
            colors: ['#29368f', '#e9697b', '#1b164d', '#f7d996']
        },
        {
            name: 'Winter-night',
            colors: ['#122438', '#dd672e', '#87c7ca', '#ebebeb']
        },
        {
            name: 'Saami',
            colors: ['#eab700', '#e64818', '#2c6393', '#eecfca']
        },
        {
            name: 'Knotberry1',
            colors: ['#20342a', '#f74713', '#686d2c', '#e9b4a6']
        },
        {
            name: 'Knotberry2',
            colors: ['#1d3b1a', '#eb4b11', '#e5bc00', '#f29881']
        },
        {
            name: 'Tricolor',
            colors: ['#ec643b', '#56b7ab', '#f8cb57', '#1f1e43']
        },
        {
            name: 'Foxshelter',
            colors: ['#ff3931', '#007861', '#311f27', '#bab9a4']
        },
        {
            name: 'Hermes',
            colors: ['#253852', '#51222f', '#b53435', '#ecbb51']
        },
        {
            name: 'Olympia',
            colors: ['#ff3250', '#ffb33a', '#008c36', '#0085c6', '#4c4c4c']
        },
        {
            name: 'Byrnes',
            colors: ['#c54514', '#dca215', '#23507f']
        },
        {
            name: 'Butterfly',
            colors: ['#f40104', '#f6c0b3', '#99673a', '#f0f1f4']
        },
        {
            name: 'Floratopia',
            colors: ['#bf4a2b', '#cd902a', '#4e4973', '#f5d4bc']
        },
        {
            name: 'Verena',
            colors: ['#f1594a', '#f5b50e', '#14a160', '#2969de', '#885fa4']
        },
        {
            name: 'Florida_citrus',
            colors: ['#ea7251', '#ebf7f0', '#02aca5']
        },
        {
            name: 'Lemon_citrus',
            colors: ['#e2d574', '#f1f4f7', '#69c5ab']
        },
        {
            name: 'DesertSunrise',
            colors: ['#f05e3b', '#ebdec4', '#ffdb00']
        },
        {
            name: 'SunlitSand',
            colors: ['#f2d002', '#f7f5e1', '#ec643b']
        },
        {
            name: 'Moir',
            colors: ['#a49f4f', '#d4501e', '#f7c558', '#ebbaa6']
        },
        {
            name: 'Sprague',
            colors: ['#ec2f28', '#f8cd28', '#1e95bb', '#fbaab3', '#fcefdf']
        },
        {
            name: 'Bloomberg',
            colors: ['#ff5500', '#f4c145', '#144714', '#2f04fc', '#e276af']
        },
        {
            name: 'Revolucion',
            colors: ['#ed555d', '#fffcc9', '#41b797', '#eda126', '#7b5770']
        },
        {
            name: 'Sneaker',
            colors: ['#e8165b', '#401e38', '#66c3b4', '#ee7724', '#584098']
        },
        {
            name: 'Miradors',
            colors: ['#ff6936', '#fddc3f', '#0075ca', '#00bb70']
        },
        {
            name: 'Kaffeprat',
            colors: ['#BCAA8C', '#D8CDBE', '#484A42', '#746B58', '#9A8C73']
        },
        {
            name: 'Jrmy',
            colors: ['#df456c', '#ea6a82', '#270b32', '#471e43']
        },
        {
            name: 'Animo',
            colors: ['#f6c103', '#f6f6f6', '#d1cdc7', '#e7e6e5']
        },
        {
            name: 'Book',
            colors: ['#be1c24', '#d1a082', '#037b68', '#d8b1a5', '#1c2738', '#c95a3f']
        },
        {
            name: 'Juxtapoz',
            colors: ['#20357e', '#f44242', '#ffffff']
        },
        {
            name: 'Hurdles',
            colors: ['#e16503', '#dc9a0f', '#dfe2b4', '#66a7a6']
        },
        {
            name: 'Ludo',
            colors: ['#df302f', '#e5a320', '#0466b3', '#0f7963']
        },
        {
            name: 'Riff',
            colors: ['#e24724', '#c7c7c7', '#1f3e7c', '#d29294', '#010203']
        },
        {
            name: 'San_ramon',
            colors: ['#4f423a', '#f6a74b', '#589286', '#f8e9e2', '#2c2825']
        },
        {
            name: 'Sunnyday',
            colors: ['#1767D2', '#FFFFFF', '#F9AB00', '#212121']
        },
        {
            name: 'Candy-wrap',
            colors: ['#f19797', '#f9b73e', '#ee5151', '#fb671f', '#6bbe3a', '#0c75b7', '#0b9e4e', '#763f68']
        },
        {
            name: 'Slicks',
            colors: ['#e1decd', '#d95336', '#e6ac1d']
        },
        {
            name: 'Circus',
            colors: ['#3eb79e', '#f4a910', '#f37377', '#207986', '#f26003', '#afce95']
        },
        {
            name: 'Spotlight',
            colors: ['#f34312', '#00a49e', '#ef888f', '#f5b408', '#412432']
        },
        {
            name: 'Five-stars',
            colors: ['#f5e8c7', '#d9dcad', '#cf3933', '#f3f4f4', '#74330d', '#8bb896', '#eba824', '#f05c03']
        },
        {
            name: 'Full-moon',
            colors: ['#f7e8be', '#aa879f', '#f6634e']
        },
        {
            name: 'Sunday-stroll',
            colors: ['#d44c4c', '#e47781', '#f5d274', '#f7e8be', '#acbe55', '#6fb97a', '#5ba150', '#037750', '#003e5e', '#595373', '#73659e', '#ac879f']
        },
        {
            name: 'Vegetable-soup',
            colors: ['#ec6a22', '#f7e9c5', '#399a3f', '#9ac764', '#fff7e0', '#ffcd6b', '#634754', '#98c195', '#708658']
        },
        {
            name: 'Risograph',
            colors: ['#f56f64', '#f9cb1f', '#f0eace']
        },
        {
            name: 'Sunrise',
            colors: ['#f5f5f5', '#ffc6cf', '#fd5105', '#4124b0']
        },
        {
            name: 'SunsetStripe',
            colors: ['#ffbdd0', '#ff4328', '#e88526', '#21b929', '#2193c9', '#fffcea', '#ffcc21']
        },
        {
            name: 'SpiceBazaar',
            colors: ['#ec6c26', '#613a53', '#e8ac52', '#639aa0']
        },
        {
            name: 'DesertSands',
            colors: ['#d3693e', '#803528', '#f1b156', '#90a798']
        },
        {
            name: 'TerracottaSpice',
            colors: ['#f46e26', '#68485f', '#3d273a', '#535d55']
        },
        {
            name: 'SunsetMarket',
            colors: ['#ea720e', '#ca5130', '#e9c25a', '#52534f']
        },
        {
            name: 'MarblePalace',
            colors: ['#ce565e', '#8e1752', '#f8a100', '#3ac1a6']
        },
        {
            name: 'SandTemple',
            colors: ['#f5736a', '#925951', '#feba4c', '#9d9b9d']
        },
        {
            name: 'OceanSunrise',
            colors: ['#004996', '#567bae', '#ff4c48', '#ffbcb3']
        },
        {
            name: 'CoastalGlow',
            colors: ['#004996', '#567bae', '#ffc000', '#ffdca4']
        },
        {
            name: 'SpringLake',
            colors: ['#004996', '#567bae', '#60bf3c', '#d2deb1']
        },
        {
            name: 'LavenderDream',
            colors: ['#4d3d9a', '#f76975', '#ffffff', '#eff0dd']
        },
        {
            name: 'MintMorning',
            colors: ['#abdfdf', '#fde500', '#58bdbc', '#eff0dd']
        },
        {
            name: 'SunriseOrchid',
            colors: ['#fde500', '#2f2043', '#f76975', '#eff0dd']
        },
        {
            name: 'Retro',
            colors: ['#69766f', '#9ed6cb', '#f7e5cc', '#9d8f7f', '#936454', '#bf5c32', '#efad57']
        },
        {
            name: 'Retro-washedout',
            colors: ['#878a87', '#cbdbc8', '#e8e0d4', '#b29e91', '#9f736c', '#b76254', '#dfa372']
        },
        {
            name: 'Roygbiv-warm',
            colors: ['#705f84', '#687d99', '#6c843e', '#fc9a1a', '#dc383a', '#aa3a33', '#9c4257']
        },
        {
            name: 'Roygbiv-toned',
            colors: ['#817c77', '#396c68', '#89e3b7', '#f59647', '#d63644', '#893f49', '#4d3240']
        },
        {
            name: 'Present-correct',
            colors: ['#fd3741', '#fe4f11', '#ff6800', '#ffa61a', '#ffc219', '#ffd114', '#fcd82e', '#f4d730', '#ced562', '#8ac38f', '#79b7a0', '#72b5b1', '#5b9bae', '#6ba1b7', '#49619d', '#604791', '#721e7f', '#9b2b77', '#ab2562', '#ca2847']
        },
        {
            name: 'ArcadeNights',
            colors: ['#4aad8b', '#e15147', '#f3b551', '#cec8b8', '#d1af84', '#544e47']
        },
        {
            name: 'GardenSunset',
            colors: ['#75974a', '#c83e3c', '#f39140', '#e4ded2', '#f8c5a4', '#434f55']
        },
        {
            name: 'BambooGrove',
            colors: ['#687f72', '#cc7d6c', '#dec36f', '#dec7af', '#ad8470', '#424637']
        },
        {
            name: 'FrostedPine',
            colors: ['#40708c', '#8e998c', '#5d3f37', '#ed6954', '#f2e9e2']
        },
        {
            name: 'IcelandDawn',
            colors: ['#5f9e93', '#3d3638', '#733632', '#b66239', '#b0a1a4', '#e3dad2']
        },
        {
            name: 'NordicLight',
            colors: ['#87c3ca', '#7b7377', '#b2475d', '#7d3e3e', '#eb7f64', '#d9c67a', '#f3f2f2']
        },
        {
            name: 'ArcticEmber',
            colors: ['#d53939', '#b6754d', '#a88d5f', '#524643', '#3c5a53', '#7d8c7c', '#dad6cd']
        },
        {
            name: 'SpringBlossom',
            colors: ['#e3dd34', '#78496b', '#f0527f', '#a7e0e2']
        },
        {
            name: 'SunsetBreeze',
            colors: ['#ffce49', '#ede8dc', '#ff5736', '#ff99b4']
        },
        {
            name: 'AutumnMeadow',
            colors: ['#5c5f46', '#ff7044', '#ffce39', '#66aeaa']
        },
        {
            name: 'DuskGarden',
            colors: ['#553c60', '#ffb0a0', '#ff6749', '#fbe090']
        },
        {
            name: 'TropicalDusk',
            colors: ['#bbd444', '#fcd744', '#fa7b53', '#423c6f']
        },
        {
            name: 'CoastalDream',
            colors: ['#0d4a4e', '#ff947b', '#ead3a2', '#5284ab']
        },
        {
            name: 'ForestEmber',
            colors: ['#363d4a', '#7b8a56', '#ff9369', '#f4c172']
        },
        {
            name: 'VividCarnival',
            colors: ['#ff4242', '#fec101', '#1841fe', '#fcbdcc', '#82e9b5']
        },
        {
            name: 'SunsetHarbor',
            colors: ['#ff4242', '#ffd480', '#1e365d', '#edb14c', '#418dcd']
        },
        {
            name: 'CoralReef',
            colors: ['#f73f4a', '#d3e5eb', '#002c3e', '#1aa1b1', '#ec6675']
        },
        {
            name: 'TropicalNight',
            colors: ['#e31f4f', '#f0ac3f', '#18acab', '#26265a', '#ea7d81', '#dcd9d0']
        },
        {
            name: 'OceanStorm',
            colors: ['#db4549', '#d1e1e1', '#3e6a90', '#2e3853', '#a3c9d3']
        },
        {
            name: 'GardenRose',
            colors: ['#e5475c', '#95b394', '#28343b', '#f7c6a3', '#eb8078']
        },
        {
            name: 'CoastalSunset',
            colors: ['#d75c49', '#f0efea', '#509da4']
        },
        {
            name: 'MountainDawn',
            colors: ['#f6625a', '#92b29f', '#272c3f']
        },
        {
            name: 'SunriseOcean',
            colors: ['#ff5937', '#f6f6f4', '#4169ff']
        },
        {
            name: 'CoralMist',
            colors: ['#ff5937', '#f6f6f4', '#f6f6f4']
        },
        {
            name: 'MistyFlame',
            colors: ['#f6f6f4', '#ff5937', '#ff5937']
        },
        {
            name: 'ArcticBreeze',
            colors: ['#4169ff', '#f6f6f4', '#f6f6f4']
        },
        {
            name: 'FrostySky',
            colors: ['#f6f6f4', '#4169ff', '#4169ff']
        },

        {
            name: 'AmethystDream',
            colors: ['#8B5CF6', '#A78BFA', '#C4B5FD', '#E9D5FF', '#F3E8FF']
        },
        {
            name: 'EmeraldMyst',
            colors: ['#059669', '#34D399', '#6EE7B7', '#A7F3D0', '#D1FAE5']
        },
        {
            name: 'RoseQuartz',
            colors: ['#F472B6', '#FBBF24', '#FDE68A', '#FEF3C7', '#FFFBEB']
        },
        {
            name: 'SapphireDepth',
            colors: ['#1E40AF', '#3B82F6', '#60A5FA', '#93C5FD', '#DBEAFE']
        },
        {
            name: 'CitrineSun',
            colors: ['#D97706', '#F59E0B', '#FBBF24', '#FDE68A', '#FFFBEB']
        },
        {
            name: 'OpalShimmer',
            colors: ['#EC4899', '#8B5CF6', '#3B82F6', '#10B981', '#F59E0B']
        },
        {
            name: 'MoonStone',
            colors: ['#6B7280', '#9CA3AF', '#D1D5DB', '#F3F4F6', '#FFFFFF']
        },
        {
            name: 'AquamarineWave',
            colors: ['#0891B2', '#06B6D4', '#22D3EE', '#67E8F9', '#CFFAFE']
        },
        {
            name: 'GarnetFire',
            colors: ['#7C2D12', '#DC2626', '#EF4444', '#F87171', '#FECACA']
        },
        {
            name: 'LapisLazuli',
            colors: ['#1E3A8A', '#1D4ED8', '#3B82F6', '#60A5FA', '#DBEAFE']
        },
        {
            name: 'JadeSerenity',
            colors: ['#14532D', '#166534', '#15803D', '#22C55E', '#BBF7D0']
        },
        {
            name: 'TopazGlow',
            colors: ['#92400E', '#D97706', '#F59E0B', '#FBBF24', '#FEF3C7']
        },
        {
            name: 'TourmalineSpectrum',
            colors: ['#BE185D', '#E11D48', '#F59E0B', '#10B981', '#3B82F6']
        },
        {
            name: 'CrystalCave',
            colors: ['#374151', '#6B7280', '#9CA3AF', '#E5E7EB', '#F9FAFB']
        },
        {
            name: 'PrismLight',
            colors: ['#DB2777', '#8B5CF6', '#3B82F6', '#059669', '#F59E0B']
        },
        {
            name: 'IceCrystal',
            colors: ['#0C4A6E', '#0284C7', '#0EA5E9', '#38BDF8', '#E0F2FE']
        },
        {
            name: 'VioletFlame',
            colors: ['#581C87', '#7C3AED', '#8B5CF6', '#A78BFA', '#E9D5FF']
        },
        {
            name: 'SeafoamCrystal',
            colors: ['#065F46', '#047857', '#059669', '#10B981', '#D1FAE5']
        },
        {
            name: 'SunsetGeode',
            colors: ['#7C2D12', '#EA580C', '#F59E0B', '#FBBF24', '#FEF3C7']
        },
        {
            name: 'MysticQuartz',
            colors: ['#4C1D95', '#7C3AED', '#EC4899', '#F59E0B', '#F3F4F6']
        }
    ];

    function RGBtoHSV(r, g, b) {
        var cmin, cmax;
        var h = s = v = 0;
        var colorObj = new Object();
        if (r >= g) cmax = r;
        else cmax = g;
        if (b > cmax) cmax = b;
        if (r <= g) cmin = r;
        else cmin = g;
        if (b < cmin) cmin = b;
        v = cmax;
        c = cmax - cmin;
        if (cmax == 0) s = 0;
        else s = c / cmax;
        if (s != 0) {
            if (r == cmax) {
                h = (g - b) / c;
            } else {
                if (g == cmax) {
                    h = 2 + (b - r) / c;
                } else {
                    if (b == cmax) h = 4 + (r - g) / c;
                }
            }
            h = h * 60;
            if (h < 0) h = h + 360;
        }
        colorObj.h = h;
        colorObj.s = s;
        colorObj.v = v;
        return colorObj;
    }

    function HSVtoRGB(h, s, v) {
        var r = g = b = 0;
        var colorObj = new Object();
        if (s < 0) s = 0;
        if (s > 1) s = 1;
        if (v < 0) v = 0;
        if (v > 1) v = 1;
        h = h % 360;
        if (h < 0) h = h + 360;
        h = h / 60;
        var i = Math.floor(h);
        var f = h - i;
        var p1 = v * (1 - s);
        var p2 = v * (1 - s * f);
        var p3 = v * (1 - s * (1 - f));
        if (i == 0) {
            r = v;
            g = p3;
            b = p1;
        }
        if (i == 1) {
            r = p2;
            g = v;
            b = p1;
        }
        if (i == 2) {
            r = p1;
            g = v;
            b = p3;
        }
        if (i == 3) {
            r = p1;
            g = p2;
            b = v;
        }
        if (i == 4) {
            r = p3;
            g = p1;
            b = v;
        }
        if (i == 5) {
            r = v;
            g = p1;
            b = p2;
        }
        colorObj.r = r;
        colorObj.g = g;
        colorObj.b = b;
        return colorObj;
    }

    function RGBtoYCbCr(r, g, b) {
        var colorObj = new Object();
        colorObj.Y = 0.29891 * r + 0.58661 * g + 0.11448 * b;
        colorObj.Cb = -0.16874 * r - 0.33126 * g + 0.50000 * b;
        colorObj.Cr = 0.50000 * r - 0.41869 * g - 0.08131 * b;
        return colorObj;
    }

    function YCbCrtoRGB(Y, Cb, Cr) {
        var colorObj = new Object();
        colorObj.r = Y + 1.40200 * Cr;
        colorObj.g = Y - 0.34414 * Cb - 0.71414 * Cr;
        colorObj.b = Y + 1.77200 * Cb;
        if (colorObj.r < 0) colorObj.r = 0;
        if (colorObj.g < 0) colorObj.g = 0;
        if (colorObj.b < 0) colorObj.b = 0;
        return colorObj;
    }

    function rgbToHsl(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        return [h * 360, s * 100, l * 100];
    }

    function hslToRgb(h, s, l) {
        h /= 360;
        s /= 100;
        l /= 100;
        var r, g, b;

        if (s === 0) {
            r = g = b = l;
        } else {
            var hue2rgb = function(p, q, t) {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }

    function hexToRGB(hex) {
        var r = parseInt(hex.slice(1, 3), 16);
        var g = parseInt(hex.slice(3, 5), 16);
        var b = parseInt(hex.slice(5, 7), 16);
        return [r, g, b];
    }

    function rgbToHex(r, g, b) {
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    function rgbToColor(r, g, b) {
        var color = new RGBColor();
        color.red = r;
        color.green = g;
        color.blue = b;
        return color;
    }

    function hexToColor(hex) {
        var rgb = hexToRGB(hex);
        return rgbToColor(rgb[0], rgb[1], rgb[2]);
    }

    RGBColor.of = function(red, green, blue) {
        var color = new RGBColor();
        color.red = red;
        color.green = green;
        color.blue = blue;
        return color;
    }

    RGBColor.ofHex = function(hex) {
        return hexToColor(hex);
    }

    CMYKColor.of = function(cyan, magenta, yellow, black) {
        var color = new CMYKColor();
        color.cyan = cyan;
        color.magenta = magenta;
        color.yellow = yellow;
        color.black = black;
        return color;
    }

    GrayColor.of = function(gray) {
        var color = new GrayColor();
        color.gray = gray;
        return color;
    }

    LabColor.of = function(l, a, b) {
        var color = new LabColor();
        color.l = l;
        color.a = a;
        color.b = b;
        return color;
    }

    function getColorScheme(name) {
        var lowercaseName = name.toLowerCase();
        for (var i = 0; i < colorScheme.length; i++) {
            if (colorScheme[i].name.toLowerCase() === lowercaseName) {
                return colorScheme[i];
            }
        }
        return {
            name: 'Default',
            colors: ['#ffffff', '#000000']
        };
    }

    function getColorSchemeByIndex(index) {
        if (index >= 0 && index < colorScheme.length) {
            return colorScheme[index];
        }
        return {
            name: 'Default',
            colors: ['#ffffff', '#000000']
        };
    }

    function getRandomColorScheme() {
        var index = Math.floor(Math.random() * colorScheme.length);
        return colorScheme[index];
    }

    function getRandomColorFromScheme(scheme) {
        var index = Math.floor(Math.random() * scheme.colors.length);
        return scheme.colors[index];
    }

    function getColorSchemeShuffledColors(name) {
        var scheme = getColorScheme(name);
        var shuffled = scheme.colors.slice();
        for (var i = shuffled.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = shuffled[i];
            shuffled[i] = shuffled[j];
            shuffled[j] = temp;
        }
        return {
            name: scheme.name,
            colors: shuffled
        };
    }

    function generateColorScheme(baseColor, scheme) {
        scheme = scheme || 'complementary';
        var rgb = hexToRGB(baseColor);
        var hsl = rgbToHsl(rgb[0], rgb[1], rgb[2]);
        var h = hsl[0],
            s = hsl[1],
            l = hsl[2];
        var colors = [];

        switch (scheme) {
            case 'complementary':
                colors = [
                    baseColor,
                    rgbToHex.apply(null, hslToRgb((h + 180) % 360, s, l))
                ];
                break;
            case 'analogous':
                colors = [
                    rgbToHex.apply(null, hslToRgb((h - 30 + 360) % 360, s, l)),
                    baseColor,
                    rgbToHex.apply(null, hslToRgb((h + 30) % 360, s, l))
                ];
                break;
            case 'triadic':
                colors = [
                    baseColor,
                    rgbToHex.apply(null, hslToRgb((h + 120) % 360, s, l)),
                    rgbToHex.apply(null, hslToRgb((h + 240) % 360, s, l))
                ];
                break;
            case 'tetradic':
                colors = [
                    baseColor,
                    rgbToHex.apply(null, hslToRgb((h + 90) % 360, s, l)),
                    rgbToHex.apply(null, hslToRgb((h + 180) % 360, s, l)),
                    rgbToHex.apply(null, hslToRgb((h + 270) % 360, s, l))
                ];
                break;
            default:
                colors = [baseColor];
        }

        return colors;
    }

    function applyColorToPath(pathItem, hexColor, isFill) {
        var color = RGBColor.ofHex(hexColor);
        if (isFill) {
            pathItem.filled = true;
            pathItem.fillColor = color;
        } else {
            pathItem.stroked = true;
            pathItem.strokeColor = color;
        }
    }

    function createGradient(colors, name) {
        var doc = app.activeDocument;
        var gradient = doc.gradients.add();
        gradient.type = GradientType.LINEAR;

        var step = 100 / (colors.length - 1);

        for (var i = 0; i < colors.length; i++) {
            var stop;
            if (i < gradient.gradientStops.length) {
                stop = gradient.gradientStops[i];
            } else {
                stop = gradient.gradientStops.add();
            }
            stop.rampPoint = i * step;
            stop.color = RGBColor.ofHex(colors[i]);
        }

        while (gradient.gradientStops.length > colors.length) {
            gradient.gradientStops[gradient.gradientStops.length - 1].remove();
        }

        return gradient;
    }

    function applyGradientToPath(pathItem, gradient, angle) {
        angle = angle || 0;
        pathItem.filled = true;

        var gradientColor = new GradientColor();
        gradientColor.gradient = gradient;
        pathItem.fillColor = gradientColor;

        if (angle !== 0) {
            pathItem.rotate(angle, false, false, true, false, Transformation.CENTER);
        }
    }

    function createRandomGradientFromColors(colors, numColors) {
        numColors = numColors || 2;
        var selectedColors = [];

        if (numColors <= colors.length) {
            var shuffled = colors.slice();
            for (var i = shuffled.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = shuffled[i];
                shuffled[i] = shuffled[j];
                shuffled[j] = temp;
            }
            for (var k = 0; k < numColors; k++) {
                selectedColors.push(shuffled[k]);
            }
        } else {
            for (var i = 0; i < numColors; i++) {
                var randomIndex = Math.floor(Math.random() * colors.length);
                selectedColors.push(colors[randomIndex]);
            }
        }

        return createGradient(selectedColors, null);
    }

    function applyRandomGradientToPath(pathItem, colors, options) {
        options = options || {};
        var numColors = options.numColors || 2;
        var angle = options.angle !== undefined ? options.angle : 45;
        var gradientType = options.gradientType || GradientType.LINEAR;
        var origin = options.origin || null;
        var destination = options.destination || null;

        var gradient = createRandomGradientFromColors(colors, numColors);
        gradient.type = gradientType;

        pathItem.filled = true;
        var gradientColor = new GradientColor();
        gradientColor.gradient = gradient;
        gradientColor.angle = angle;

        if (origin && destination) {
            gradientColor.origin = origin;
            gradientColor.destination = destination;
        }

        pathItem.fillColor = gradientColor;
        return gradient;
    }

    function applyGradientWithOrigin(pathItem, colors, centerX, centerY, length, options) {
        options = options || {};
        var numColors = options.numColors || 2;
        var gradientType = options.gradientType || GradientType.LINEAR;
        var offsetMultiplier = options.offsetMultiplier !== undefined ? options.offsetMultiplier : 1;
        var angle = options.angle !== undefined ? options.angle : null;
        var randomAngle = options.randomAngle !== undefined ? options.randomAngle : false;

        var gradient = createRandomGradientFromColors(colors, numColors);
        gradient.type = gradientType;

        var gradientAngleDegrees;
        if (randomAngle || angle === null) {
            gradientAngleDegrees = Math.random() * 360;
        } else {
            gradientAngleDegrees = angle;
        }

        applyGradientToPath(pathItem, gradient, gradientAngleDegrees);
        return gradient;
    }

    $.global.ColorKit = {
        getColorScheme: getColorScheme,
        getColorSchemeByIndex: getColorSchemeByIndex,
        getRandomColorScheme: getRandomColorScheme,
        getRandomColorFromScheme: getRandomColorFromScheme,
        getColorSchemeShuffledColors: getColorSchemeShuffledColors,
        generateColorScheme: generateColorScheme,

        RGBtoHSV: RGBtoHSV,
        HSVtoRGB: HSVtoRGB,
        RGBtoYCbCr: RGBtoYCbCr,
        YCbCrtoRGB: YCbCrtoRGB,
        rgbToHsl: rgbToHsl,
        hslToRgb: hslToRgb,

        hexToRGB: hexToRGB,
        rgbToHex: rgbToHex,

        applyColorToPath: applyColorToPath,
        createGradient: createGradient,
        applyGradientToPath: applyGradientToPath,
        createRandomGradientFromColors: createRandomGradientFromColors,
        applyRandomGradientToPath: applyRandomGradientToPath,
        applyGradientWithOrigin: applyGradientWithOrigin
    };

})();