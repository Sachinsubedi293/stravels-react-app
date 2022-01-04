const access_refresh = (a) =>{
    var count = 0;
    var refresh = "";
    var access = "";
    for(var i=0;i<a.length;i++){
        if(a[i]===`'`)
        {
            count++;
        }
        if(count>=3&&count<4)
        {
            refresh+=a[i]
           
        }
        if(count>=7&&count<8)
        {
            access+=a[i]
        }
    }
    return {'refresh':refresh,'access':access}
}
export default access_refresh;