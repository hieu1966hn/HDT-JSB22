//  Chữa bài 1:
for (let i = 1; i < 10; i = i + 1) {
  for(let k = 10;k>i;k = k-1){
    document.write("&nbsp;&nbsp;");
  }
  for(let j=1;j<=i*2-1;j=j+1){
    document.write("*")
  }

  document.write("<br />");
}