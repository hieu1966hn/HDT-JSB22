- Vòng lặp: Tại sao phải có vòng lặp? Khi mà khối lượng công việc gặp phải rất nhiều và như nhau.
    + while: Kiểm tra điều kiện đầu vào (nếu đúng) => chạy code bên trong while 
    và tiếp tục lặp lại
        * Cú pháp: 
        while(<điều kiện>){
            ..code
        }
    
    + do - while:Cho phép lặp lần đầu tiên (free) => kiểm tra điều kiện, Nếu đúng => lặp
                                                                Nếu sai => thoát vòng lặp
        * Cú pháp
        do{
            ...code
        }
        while(<điều kiện>);
        ...

    + for: Vòng lặp biết trước số lần lặp
        * Cú pháp: 
        for(câu lệnh 1; điều kiện; câu lệnh){
            ... code
        }
        B1: Chạy câu lệnh 1 lần đầu tiên và duy Nhất
        B2: kiểm tra điều kiện lặp tại mục điều kiện. Nếu đùng => Chạy code trong for
                                                    Nếu sai => thoát vòng lặp for
        B3: Lặp lại kiểm tra lại điều kiện ở mục điều kiện. Nếu đúng => chạy code cho tới khi nào điều kiện sai => thoát vòng lặp.