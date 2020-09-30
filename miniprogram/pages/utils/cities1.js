//初始化常用机场城市
var hotCities=[];

//初始化所有国内机场城市
var citys=[];
citys[0] = new Array('PEK','北京首都','北京首都','北京');
citys[1] = new Array('PKX','北京大兴','北京大兴','北京');
citys[2] = new Array('PVG','上海浦东','上海浦东','上海');
citys[3] = new Array('SHA','上海虹桥','上海虹桥','上海');
citys[4] = new Array('CAN','广州白云','广州','广东');
citys[5] = new Array('SZX','深圳宝安','深圳','广东');
citys[6] = new Array('CTU','成都双流','成都','四川');
citys[7] = new Array('KMG','昆明长水','昆明','云南');
citys[8] = new Array('CKG','重庆江北','重庆','重庆');
citys[9] = new Array('XIY','西安咸阳','西安','陕西');
citys[10] = new Array('HGH','杭州萧山','杭州','浙江');
citys[11] = new Array('TAO','青岛流亭','青岛','山东');
citys[12] = new Array('NKG','南京禄口','南京','江苏');
citys[13] = new Array('CSX','长沙黄花','长沙','湖南');
citys[14] = new Array('FOC','福州长乐','福州','福建');
citys[15] = new Array('TSN','天津滨海','天津','天津');
citys[16] = new Array('XMN','厦门高崎','厦门','福建');
citys[17] = new Array('CGO','郑州新郑','郑州','河南');
citys[18] = new Array('LXA','拉萨贡嘎','拉萨','西藏');
citys[19] = new Array('DLU','大理','大理','云南');
citys[20] = new Array('LJG','丽江三义','丽江','云南');
citys[21] = new Array('NNG','南宁吴圩','南宁','广西');
citys[22] = new Array('HRB','哈尔滨太平','哈尔滨','黑龙江');
citys[23] = new Array('NGB','宁波栎社','宁波','浙江');
citys[24] = new Array('HFE','合肥新桥','合肥','安徽');
citys[25] = new Array('KWE','贵阳龙洞堡','贵阳','贵州');
citys[26] = new Array('WUH','武汉天河','武汉','湖北');
citys[27] = new Array('XNN','西宁曹家堡','西宁','青海');
citys[28] = new Array('HAK','海口美兰','海口','海南');
citys[29] = new Array('URC','乌鲁木齐地窝堡','乌鲁木齐','新建');
citys[30] = new Array('TXN','黄山屯溪','黄山','安徽');
citys[31] = new Array('ENH','恩施许家坪','恩施','湖北');
citys[32] = new Array('SHE','沈阳桃仙','沈阳','辽宁');
citys[33] = new Array('DLC','大连周水子','大连','辽宁');
citys[34] = new Array('JHG','西双版纳嘎洒','西双版纳','云南');
citys[35] = new Array('TYN','太原武宿','太原','山西');
citys[36] = new Array('INC','银川河东','银川','宁夏');
citys[37] = new Array('LHW','兰州中川','兰州','甘肃');
citys[38] = new Array('HET','呼和浩特白塔','呼和浩特','内蒙古');
citys[39] = new Array('KWL','桂林两江','桂林','广西');
citys[40] = new Array('KHN','南昌昌北','南昌','江西');
citys[41] = new Array('SYX','三亚凤凰','三亚','海南');
citys[42] = new Array('TNA','济南遥墙','济南','山东');
citys[43] = new Array('ZUH','珠海金湾','珠海','广东');
citys[44] = new Array('SWA','揭阳潮汕','揭阳','广东');
citys[45] = new Array('CGQ','长春龙嘉','长春','吉林');
citys[46] = new Array('WNZ','温州龙湾','温州','浙江');
citys[47] = new Array('SJW','石家庄正定','石家庄','河北');
citys[48] = new Array('YNT','烟台蓬莱','烟台','山东');
citys[49] = new Array('JJN','泉州晋江','泉州','福建');
citys[50] = new Array('WUX','苏南硕放','无锡','江苏');
citys[51] = new Array('DSN','鄂尔多斯','鄂尔多斯','内蒙古');
citys[52] = new Array('CZX','常州奔牛','常州','江苏');
citys[53] = new Array('WMT','遵义茅台','遵义','贵州');
citys[54] = new Array('DYG','张家界荷花','张家界','湖南');
citys[55] = new Array('YNZ','盐城南洋','盐城','江苏');
citys[56] = new Array('DIG','迪庆香格里拉','迪庆','云南');
citys[57] = new Array('ZYI','遵义新舟','遵义新舟','贵州');
citys[58] = new Array('WEH','威海大水泊','威海','山东');
citys[59] = new Array('NTG','南通兴东','南通','江苏');
citys[60] = new Array('XUZ','徐州观音','徐州','江苏');
citys[61] = new Array('HIA','淮安涟水','淮安','江苏');
citys[62] = new Array('YTY','扬州泰州','扬州','江苏');
citys[63] = new Array('MIG','绵阳南郊','绵阳','四川');
citys[64] = new Array('DCY','稻城亚丁','稻城','四川');
citys[65] = new Array('THQ','天水麦积山','天水','甘肃');
citys[66] = new Array('XAI','信阳明港','信阳','河南');
citys[67] = new Array('ZAT','昭通','昭通','云南');
citys[68] = new Array('LZO','泸州云龙','泸州','四川');
citys[69] = new Array('WDS','十堰武当山','十堰','湖北');
citys[70] = new Array('LYA','洛阳北郊','洛阳','河南');
citys[71] = new Array('BZX','巴中恩阳','巴中','四川');
citys[72] = new Array('YYA','岳阳三荷','岳阳','湖南');
citys[73] = new Array('JUH','池州九华山','池州','安徽');
citys[74] = new Array('CGD','常德桃花源','常德','湖南');
citys[75] = new Array('YIC','宜春明月山','宜春','江西');
citys[76] = new Array('CIH','长治王村','长治','山西');
citys[77] = new Array('KOW','赣州黄金','赣州','江西');
citys[78] = new Array('RIZ','日照山字河','日照','山东');
citys[79] = new Array('SQJ','三明沙县','三明','福建');
citys[80] = new Array('JDZ','景德镇罗家','景德镇','江西');
citys[81] = new Array('ACX','兴义万峰林','兴义','贵州');
citys[82] = new Array('WXN','万州五桥','万州','重庆');
citys[83] = new Array('JNG','济宁曲阜','济宁','山东');
citys[84] = new Array('DAX','达州河市','达州','四川');
citys[85] = new Array('BFJ','毕节飞雄','毕节','贵州');
citys[86] = new Array('WGN','邵阳武冈','邵阳','湖南');
citys[87] = new Array('BSD','保山云瑞','保山','云南');
citys[88] = new Array('JGS','井冈山','井冈山','江西');
citys[89] = new Array('NAO','南充高坪','南充','四川');
citys[90] = new Array('HNY','衡阳南岳','衡阳','湖南');
citys[91] = new Array('ZHA','湛江','湛江','广东');
citys[92] = new Array('XFN','襄阳刘集','襄阳','湖北');
citys[93] = new Array('JIQ','黔江武陵山','黔江','重庆');
citys[94] = new Array('WUS','武夷山','武夷山','福建');
citys[95] = new Array('SQD','上饶三清山','上饶','江西');
citys[96] = new Array('LZH','柳州白莲','柳州','广西');
citys[97] = new Array('LCX','龙岩冠豸山','龙岩','福建');
citys[98] = new Array('AQG','安庆天柱山','安庆','安徽');
citys[99] = new Array('WUZ','梧州西江','梧州','广西');
citys[100] = new Array('LYI','临沂启阳','临沂','山东');
citys[101] = new Array('HSN','舟山普陀山','舟山','浙江');
citys[102] = new Array('NNY','南阳姜营','南阳','河南');
citys[103] = new Array('YBP','宜宾五粮液','宜宾','四川');
citys[104] = new Array('GOQ','格尔木','格尔木','青海');
citys[105] = new Array('GZG','甘孜格萨尔','甘孜格萨尔','四川');
citys[106] = new Array('KGT','甘孜康定','甘孜康定','四川');
citys[107] = new Array('GXH','甘南夏河','夏河','甘肃');
citys[108] = new Array('ZQZ','张家口宁远','张家口','河北');
citys[109] = new Array('HJJ','怀化芷江','怀化','湖南');
citys[110] = new Array('TGO','通辽','通辽','内蒙古');
citys[111] = new Array('CIF','赤峰玉龙','赤峰','内蒙古');
citys[112] = new Array('YIH','宜昌三峡','宜昌','湖北');
citys[113] = new Array('LFQ','临汾尧都','临汾','山西');
citys[114] = new Array('HLH','乌兰浩特','乌兰浩特','内蒙古');
citys[115] = new Array('TEN','铜仁凤凰','铜仁','贵州');
citys[116] = new Array('WEF','潍坊南苑','潍坊','山东');
citys[117] = new Array('BPE','秦皇岛北戴河','秦皇岛','河北');
citys[118] = new Array('TVS','唐山三女河','唐山','河北');
citys[119] = new Array('UYN','榆林榆阳','榆林','陕西');
citys[120] = new Array('BAV','包头东河','包头','内蒙古');
citys[121] = new Array('JNZ','锦州锦州湾','锦州','辽宁');
citys[122] = new Array('LYG','连云港白塔埠','连云港','江苏');
citys[123] = new Array('WUT','忻州五台山','忻州','山西');
citys[124] = new Array('DAT','大同云冈','大同','山西');
citys[125] = new Array('HDG','邯郸','邯郸','河北');
citys[126] = new Array('YUS','玉树巴塘','玉树','青海');
citys[127] = new Array('YCU','运城关公','运城','山西');
citys[128] = new Array('AEB','百色巴马','百色','广西');
citys[129] = new Array('MXZ','梅州梅县','梅州','广东');
citys[130] = new Array('BHY','北海福成','北海','广西');
citys[131] = new Array('LLV','吕梁大武','吕梁','山西');
citys[132] = new Array('FUO','佛山沙堤','佛山','广东');
citys[133] = new Array('HUZ','惠州平潭','惠州','广东');
citys[134] = new Array('CDE','承德普宁','承德','河北');
citys[135] = new Array('JZH','九寨沟','九寨沟','四川');
citys[136] = new Array('AHJ','阿坝红原','阿坝','四川');
citys[137] = new Array('KRL','库尔勒','库尔勒','新疆');
citys[138] = new Array('HLD','呼伦贝尔东山','呼伦贝尔','内蒙古');
citys[139] = new Array('KHG','喀什','喀什','新疆');
citys[140] = new Array('LUM','德宏芒市','德宏','云南');
citys[141] = new Array('YNJ','延吉朝阳川','延吉','吉林');
citys[142] = new Array('YIW','义乌','义乌','浙江');
citys[143] = new Array('YIN','伊宁','伊宁','新疆');
citys[144] = new Array('HTN','和田','和田','新疆');
citys[145] = new Array('LZY','林芝米林','林芝','西藏');
citys[146] = new Array('NGQ','阿里昆莎','阿里','西藏');
citys[147] = new Array('YIE','阿尔山伊尔施','阿尔山','内蒙古');
citys[148] = new Array('AKU','阿克苏温宿','阿克苏','新疆');
citys[149] = new Array('AAT','阿勒泰','阿勒泰','新疆');
citys[150] = new Array('AOG','鞍山腾鳌','鞍山','辽宁');
citys[151] = new Array('AVA','安顺黄果树','安顺','贵州');
citys[152] = new Array('RLK','巴彦淖尔','巴彦淖尔','内蒙古');
citys[153] = new Array('BPL','博乐阿拉山口','博乐','新疆');
citys[154] = new Array('CWJ','沧源佤山','沧源','云南');
citys[155] = new Array('NBS','长白山','长白山','吉林');
citys[156] = new Array('CHG','朝阳','朝阳','辽宁');
citys[157] = new Array('DDG','丹东浪头','丹东','辽宁');
citys[158] = new Array('HXD','德令哈','德令哈','青海');
citys[159] = new Array('DOY','东营胜利','东营','辽宁');
citys[160] = new Array('DNH','敦煌莫高','敦煌','甘肃');
citys[161] = new Array('ERL','二连浩特赛乌苏','二连浩特','内蒙古');
citys[162] = new Array('TCZ','腾冲驼峰','腾冲','云南');
citys[163] = new Array('FUG','阜阳西关','阜阳','安徽');
citys[164] = new Array('GYU','固原六盘山','固原','宁夏');
citys[165] = new Array('GYS','广元盘龙','广元','四川');
citys[166] = new Array('GMQ','果洛玛沁','果洛','青海');
citys[167] = new Array('HMI','哈密机场','哈密','青海');
citys[168] = new Array('HZG','汉中城固','汉中','陕西');
citys[169] = new Array('HEK','黑河','黑河','黑龙江');
citys[170] = new Array('HTT','花土沟','花土沟','青海');
citys[171] = new Array('JXA','鸡西兴凯湖','鸡西','黑龙江');
citys[172] = new Array('JGD','加格达奇','加格达奇','黑龙江');
citys[173] = new Array('JMU','佳木斯东郊','佳木斯','黑龙江');
citys[174] = new Array('JGN','嘉峪关','嘉峪关','甘肃');
citys[175] = new Array('SYM','普洱思茅','普洱','云南');
citys[176] = new Array('KRY','克拉玛依','克拉玛依','新疆');
citys[177] = new Array('JIC','金昌金川','金昌','甘肃');
citys[178] = new Array('JIU','九江庐山','九江','江西');
citys[179] = new Array('KJH','凯里黄平','凯里','贵州');
citys[180] = new Array('NLH','宁蒗泸沽湖','宁蒗','四川');
citys[181] = new Array('KCA','库车龟兹','库车','新疆');
citys[182] = new Array('JMJ','澜沧景迈','澜沧','云南');
citys[183] = new Array('HZH','黎平','黎平','贵州');
citys[184] = new Array('LNJ','临沧博尚','临沧','云南');
citys[185] = new Array('LPF','六盘水月照','六盘水','贵州');
citys[186] = new Array('LNL','陇南成县','陇南','甘肃');
citys[187] = new Array('NZH','满洲里西郊','满洲里','内蒙古');
citys[188] = new Array('OHE','漠河古莲','漠河','黑龙江');
citys[189] = new Array('MDG','牡丹江海浪','牡丹江','黑龙江');
citys[190] = new Array('HYN','台州路桥','台州','浙江');
citys[191] = new Array('PZI','攀枝花保安营','攀枝花','四川');
citys[192] = new Array('HBQ','海北祁连','祁连','青海');
citys[193] = new Array('NDG','齐齐哈尔三家子','齐齐哈尔','黑龙江');
citys[194] = new Array('IQN','庆阳西峰','庆阳','甘肃');
citys[195] = new Array('BAR','琼海博鳌','琼海','海南');
citys[196] = new Array('JUZ','衢州','衢州','浙江');
citys[197] = new Array('RKZ','日喀则和平','日喀则','西藏');
citys[198] = new Array('QSZ','莎车叶尔羌','莎车','新疆');
citys[199] = new Array('YSQ','松原查干湖','松原','吉林');
citys[200] = new Array('HPG','神农架红坪','神农架','湖北');
citys[201] = new Array('SHF','石河子花园','石河子','新疆');
citys[202] = new Array('TNH','通化三源浦','通化','吉林');
citys[203] = new Array('TLQ','吐鲁番交河','吐鲁番','新疆');
citys[204] = new Array('UCB','乌兰察布集宁','乌兰察布','内蒙古');
citys[205] = new Array('WNH','文山砚山','文山','云南');
citys[206] = new Array('WUA','乌海','乌海','内蒙古');
citys[207] = new Array('WSK','重庆巫山','巫山','重庆');
citys[208] = new Array('XIC','西昌青山','西昌','四川');
citys[209] = new Array('XIL','锡林浩特','锡林浩特','内蒙古');
citys[210] = new Array('LDS','伊春林都','伊春','黑龙江');
citys[211] = new Array('ENY','延安南泥湾','延安','陕西');
citys[212] = new Array('YKH','营口兰旗','营口','辽宁');
citys[213] = new Array('LLF','永州零陵','永州','湖南');
citys[214] = new Array('YZY','张掖甘州','张掖','甘肃');
citys[215] = new Array('ZHY','中卫沙坡头','中卫','宁夏');
citys[216] = new Array('DQA','大庆萨尔图','大庆','黑龙江');
citys[217] = new Array('BPX','昌都邦达','昌都','西藏');
citys[218] = new Array('NAY','北京南苑','北京','北京');
citys[219] = new Array('XYI','三沙永兴','三沙','海南');
citys[220] = new Array('XNT','邢台褡裢','邢台','河北');
citys[221] = new Array('DBC','白城长安','白城','吉林');
citys[222] = new Array('RQA','若羌楼兰','巴音郭楞','新疆');
citys[223] = new Array('BHT','阿拉善右旗','阿拉善右旗','内蒙');
citys[224] = new Array('DTU','五大连池德都','黑河','黑龙江');
citys[225] = new Array('FYN','富蕴可可托海','阿勒泰','新疆');
citys[226] = new Array('FYJ','抚远东极','佳木斯','黑龙江');
citys[227] = new Array('KJI','布尔津喀纳斯','喀纳斯','新疆');
citys[228] = new Array('LLB','荔波','黔南','贵州');
citys[229] = new Array('JSJ','建三江','佳木斯','黑龙江');
citys[230] = new Array('IQM','且末','巴音郭楞','新疆');
citys[231] = new Array('HUO','霍林郭勒霍林河','霍林郭勒','内蒙古');
citys[232] = new Array('HCJ','河池金城江','河池','广西');

module.exports = {
	hotCities, 
	cities: citys
}
