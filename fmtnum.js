// Format number
function fmtNum(num, decm, tsep, dsep) {
    if (typeof decm == 'undefined') decm = 2;
    if (typeof tsep == 'undefined') tsep = '';
    if (typeof dsep == 'undefined') dsep = '.';
    num = num.toFixed(decm);
    num = num.split('.');
    num[0] = num[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1'+tsep);
    num = num.join(dsep);
    return num;
}
