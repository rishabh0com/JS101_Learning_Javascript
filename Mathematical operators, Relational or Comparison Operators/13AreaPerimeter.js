function areaAndPerimeter(L1,B1,L2,B2) {
    
    let areaRec1;
    let areaRec2;
    
    // area of rectangle 1 :
    areaRec1= L1 * B1;
    
    // area of rectangle 2 :
    areaRec2= L2 * B2;
    
    //compare area :
    console.log(areaRec1 > areaRec2);
    
    let periRec1;
    let periRec2;
    
    //perimeter of rectangle 1 :
    periRec1= 2*(L1 + B1);
    
    //perimeter of rectangle 2 :
    periRec2= 2*(L2 + B2);
    
    //compare perimeter :
    console.log(periRec1 > periRec2);
    
    
}


