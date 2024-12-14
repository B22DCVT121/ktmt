const quizData = [
  {
    question: "Máy tính điện tử là gì?",
    options: [
        "Thiết bị lưu trữ thông tin",
        "Thiết bị số hóa và biến đổi thông tin",
        "Thiết bị lưu trữ và xử lý thông tin",
        "Thiết bị tạo và biến đổi thông tin"
    ],
    answer: "Thiết bị lưu trữ và xử lý thông tin"
},
{
    question: "Máy tính đầu tiên ENIAC sử dụng linh kiện nào trong số các linh kiện sau?",
    options: [
        "Transistor lưỡng cực",
        "Transistor trường",
        "Đèn điện tử",
        "IC bán dẫn"
    ],
    answer: "Đèn điện tử"
},
{
    question: "Trong các phát biểu sau, phát biểu nào đúng?",
    options: [
        "Phần cứng của máy tính bao gồm các đối tượng vật lý như: bản mạch chính, bộ nhớ RAM, ROM, đĩa cứng, màn hình",
        "Phần cứng của máy tính bao gồm các đối tượng như: bản mạch chính, bộ nhớ RAM, bộ nhớ ROM, đĩa cứng, màn hình và chương trình được cài đặt trong ROM",
        "Phần cứng của máy tính là chương trình được cài đặt trong bộ nhớ ROM",
        "Phần cứng của máy tính chính là bộ xử lý trung tâm"
    ],
    answer: "Phần cứng của máy tính bao gồm các đối tượng vật lý như: bản mạch chính, bộ nhớ RAM, ROM, đĩa cứng, màn hình"
},
{
    question: "Các thành phần cơ bản của một máy tính gồm:",
    options: [
        "Bộ nhớ trong, CPU và khối phối ghép vào ra",
        "Bộ nhớ trong, CPU và thiết bị ngoại vi",
        "Bộ nhớ trong, CPU, khối phối ghép vào ra và thiết bị ngoại vi",
        "Bộ nhớ trong, CPU, bộ nhớ ngoài, bộ phối ghép vào ra và thiết bị ngoại vi"
    ],
    answer: "Bộ nhớ trong, CPU, bộ nhớ ngoài, bộ phối ghép vào ra và thiết bị ngoại vi"
},
{
    question: "Phần dẻo (Firmware) trong máy tính là gì?",
    options: [
        "Phần mềm được đặt vào bên trong các mạch điện tử trong quá trình sản xuất",
        "Hệ điều hành",
        "Các Driver cho các thiết bị phần cứng và các mạch hỗ trợ phối ghép vào ra cho máy tính",
        "Phần mềm hệ thống"
    ],
    answer: "Phần mềm được đặt vào bên trong các mạch điện tử trong quá trình sản xuất"
},
{
    question: "Một ví dụ về phần dẻo (Firmware) trong máy tính là:",
    options: [
        "Hệ điều hành MS DOS",
        "Chương trình điều khiển trong ROM BIOS",
        "Chương trình Driver cho Card màn hình của máy tính",
        "Phần mềm ứng dụng của người dùng"
    ],
    answer: "Chương trình điều khiển trong ROM BIOS"
},
{
    question: "Việc trao đổi dữ liệu giữa thiết bị ngoại vi và máy tính được thực hiện qua:",
    options: [
        "Một thanh ghi điều khiển",
        "Một cổng",
        "Thanh ghi AX",
        "Thanh ghi cờ"
    ],
    answer: "Một cổng"
},
{
    question: "Phần mềm của máy tính là:",
    options: [
        "Các bộ điều phối thiết bị giúp cho việc ghép nối và ra được thực hiện một cách linh hoạt.",
        "Cơ cấu trao đổi dữ liệu giữa các thiết bị phần cứng trong máy tính",
        "Chương trình được cài đặt trong bộ nhớ ROM",
        "Bộ vi xử lý và các vi mạch hỗ trợ cho nó"
    ],
    answer: "Chương trình được cài đặt trong bộ nhớ ROM"
},
{
    question: "Trong các bộ phận sau, bộ phận nào không thuộc bộ xử lý trung tâm:",
    options: [
        "Đơn vị phối ghép vào ra",
        "Khối số học và logic",
        "Tập các thanh ghi đa năng",
        "Khối điều khiển"
    ],
    answer: "Đơn vị phối ghép vào ra"
},
{
  question: "Trong các bộ phận sau, bộ phận nào không thuộc bộ xử lý trung tâm:",
  options: [
      "Bộ nhớ trong",
      "Khối số học và logic",
      "Tập các thanh ghi đa năng",
      "Khối điều khiển để thi hành lệnh một cách tuần tự và tác động lên các mạch chức năng nhằm thi hành lệnh."
  ],
  answer: "Bộ nhớ trong"
},
{
  question: "Trong các bộ phận sau, bộ phận nào thuộc bộ xử lý trung tâm:",
  options: [
      "Bộ nhớ trong",
      "Đơn vị phối ghép vào ra",
      "Tập các thanh ghi đa năng",
      "Khối điều khiển Bus hệ thống"
  ],
  answer: "Tập các thanh ghi đa năng"
},
{
  question: "Tại sao bộ nhớ trong của máy tính được gọi là bộ nhớ truy cập ngẫu nhiên?",
  options: [
      "Giá trị các ô nhớ là ngẫu nhiên",
      "Thời gian truy cập vào một ô nhớ bất kỳ là như nhau",
      "Bộ nhớ gồm các module có thứ tự sắp xếp ngẫu nhiên",
      "Thời gian truy cập vào một ô nhớ bất kỳ là ngẫu nhiên"
  ],
  answer: "Thời gian truy cập vào một ô nhớ bất kỳ là như nhau"
},
{
  question: "Tốc độ đồng hồ hệ thống được đo bằng đơn vị gì?",
  options: [
      "Bit/s",
      "Baud",
      "Byte",
      "Hz"
  ],
  answer: "Hz"
},
{
  question: "Người ta đánh giá sự phát triển của máy tính điện tử số qua các giai đoạn dựa vào tiêu chí nào trong các tiêu chí sau đây?",
  options: [
      "Tốc độ tính toán của máy tính",
      "Mức độ tích hợp của các vi mạch điện tử trong máy tính",
      "Chức năng của máy tính",
      "Cả 3 tiêu chí trên"
  ],
  answer: "Cả 3 tiêu chí trên"
},
{
  question: "Chọn một phương án đúng trong các phương án sau:",
  options: [
      "Máy Turing gồm một băng ghi (tape) và một bộ xử lý trung tâm",
      "Máy Turing gồm một bộ điều khiển trạng thái hữu hạn, một băng ghi, và một đầu đọc ghi",
      "Máy Turing gồm một bộ xử lý trung tâm và một cơ cấu lưu trữ gồm các IC nhớ",
      "Máy Turing gồm một đầu đọc ghi, một bộ xử lý trung tâm, và một băng ghi"
  ],
  answer: "Máy Turing gồm một bộ điều khiển trạng thái hữu hạn, một băng ghi, và một đầu đọc ghi"
},
{
  question: "Một trong các nội dung của nguyên lý Von Neumann là:",
  options: [
      "Máy tính có thể hoạt động theo một chương trình đã được lưu trữ",
      "Máy tính có thể điều khiển mọi hoạt động bằng một chương trình duy nhất",
      "Bộ nhớ máy tính không thể địa chỉ hóa được",
      "Mỗi câu lệnh phải có một vùng nhớ chứa địa chỉ lệnh tiếp theo"
  ],
  answer: "Máy tính có thể hoạt động theo một chương trình đã được lưu trữ"
},
{
  question: "Trong các phát biểu sau, phát biểu nào 'không' thuộc nội dung của nguyên lý Von Neumann?",
  options: [
      "Máy tính có thể hoạt động theo một chương trình đã được lưu trữ",
      "Máy tính sử dụng một bộ đếm chương trình để chỉ ra vị trí câu lệnh kế tiếp",
      "Bộ nhớ của máy tính được địa chỉ hóa",
      "Mỗi câu lệnh phải có một vùng nhớ chứa địa chỉ lệnh tiếp theo"
  ],
  answer: "Mỗi câu lệnh phải có một vùng nhớ chứa địa chỉ lệnh tiếp theo"
},
{
  question: "Trong các phát biểu sau, phát biểu nào thuộc nội dung của nguyên lý Von Neumann?",
  options: [
      "Máy tính sử dụng một bộ đếm chương trình để chỉ ra vị trí câu lệnh kế tiếp",
      "Máy tính có thể điều khiển mọi hoạt động bằng một chương trình duy nhất",
      "Bộ nhớ máy tính không thể địa chỉ hóa được",
      "Mỗi câu lệnh phải có một vùng nhớ chứa địa chỉ lệnh tiếp theo"
  ],
  answer: "Máy tính sử dụng một bộ đếm chương trình để chỉ ra vị trí câu lệnh kế tiếp"
},
{
  question: "Phát biểu sau đây thuộc nội dung của nguyên lý Von Neumann?",
  options: [
      "Các chương trình chỉ được nạp khi thực hiện",
      "Máy tính có thể điều khiển mọi hoạt động bằng một chương trình duy nhất",
      "Bộ nhớ máy tính không thể địa chỉ hóa được",
      "Bộ nhớ của máy tính được địa chỉ hóa"
  ],
  answer: "Bộ nhớ của máy tính được địa chỉ hóa"
},
{
  question: "Theo nguyên lý Von Newmann, để thay đổi thứ tự các lệnh được thực hiện, ta chỉ cần:",
  options: [
      "Thay đổi nội dung thanh ghi con trỏ lệnh bằng địa chỉ lệnh cần thực hiện tiếp",
      "Thay đổi nội dung trong vùng nhớ chứa địa chỉ chương trình đang thực hiện",
      "Thay đổi nội dung thanh ghi mảng mã lệnh",
      "Thay đổi nội dung thanh ghi mảng dữ liệu"
  ],
  answer: "Thay đổi nội dung thanh ghi con trỏ lệnh bằng địa chỉ lệnh cần thực hiện tiếp"
},
{
  question: "Theo nguyên lý Von Newmann, để truy cập một khối dữ liệu, ta cần:",
  options: [
      "Xác định địa chỉ và trạng thái của khối dữ liệu",
      "Xác định địa chỉ của khối dữ liệu",
      "Xác định trạng thái của khối dữ liệu",
      "Xác định nội dung của khối dữ liệu"
  ],
  answer: "Xác định địa chỉ của khối dữ liệu"
},
{
  question: "Thông tin được lưu trữ và truyền bên trong máy tính dưới dạng:",
  options: [
      "Nhị phân",
      "Mã ASSCII",
      "Thập phân",
      "Kết hợp chữ cái và chữ số"
  ],
  answer: "Nhị phân"
},
{
  question: "Theo nguyên lý Von Newmann, việc cài đặt dữ liệu vào máy tính được thực hiện bằng:",
  options: [
      "Đục lỗ trên băng giấy",
      "Đục lỗ trên bìa và đưa vào bằng tay",
      "Xung điện",
      "Xung điện từ"
  ],
  answer: "Xung điện"
},
{
  question: "Hãy chỉ ra khẳng định sai trong các khẳng định sau:",
  options: [
      "Hệ đếm là tập hợp các ký hiệu và qui tắc sử dụng tập ký hiệu đó để biểu diễn và xác định giá trị các số",
      "Tổng số ký số của mỗi hệ đếm được gọi là cơ số",
      "Mỗi hệ đếm được xây dựng trên một tập ký số vô hạn",
      "Hệ đếm La mã là hệ đếm không có trọng số"
  ],
  answer: "Mỗi hệ đếm được xây dựng trên một tập ký số vô hạn"
},
{
  question: "Hệ đếm là gì?",
  options: [
      "Hệ thống các kí hiệu để biểu diễn các số",
      "Hệ thống các qui tắc và phép tính để biểu biểu diễn các số",
      "Tập hợp các ký hiệu và qui tắc sử dụng nó để biểu diễn và xác định giá trị các số",
      "Tập hợp các ký hiệu để biểu diễn các qui tắc đếm"
  ],
  answer: "Tập hợp các ký hiệu và qui tắc sử dụng nó để biểu diễn và xác định giá trị các số"
},
{
  question: "Trong hệ đếm thập phân, giá trị của mỗi con số phụ thuộc vào:",
  options: [
      "Bản thân chữ số đó",
      "Vị trí của nó",
      "Bản thân chữ số đó và vị trí của nó",
      "Mối quan hệ với các chữ số trước và sau nó"
  ],
  answer: "Bản thân chữ số đó và vị trí của nó"
},
{
  question: "Trong hệ đếm La Mã, giá trị của mỗi chữ số phụ thuộc vào:",
  options: [
      "Bản thân chữ số đó",
      "Vị trí của nó",
      "Bản thân chữ số đó và vị trí của nó",
      "Mối quan hệ với các chữ số trước và sau nó"
  ],
  answer: "Bản thân chữ số đó"
},
{
  question: "Trong hệ đếm nhị phân, giá trị của mỗi con số phụ thuộc vào:",
  options: [
      "Mối quan hệ với các chữ số trước và sau nó",
      "Bản thân chữ số đó",
      "Vị trí của nó",
      "Bản thân chữ số đó và vị trí của nó"
  ],
  answer: "Bản thân chữ số đó và vị trí của nó"
},
{
  question: "Trong số dấu chấm động biểu diễn dạng 32 bit trong máy tính, thành phần định trị có độ dài bao nhiêu bit?",
  options: ["16 bit", "18 bit", "20 bit", "24 bit"],
  answer: "24 bit"
},
{
  question: "Trong số dấu chấm động biểu diễn dạng 32 bit trong máy tính, thành phần dấu có độ dài bao nhiêu bit?",
  options: ["1 bit", "2 bit", "3 bit", "5 bit"],
  answer: "1 bit"
},
{
  question: "Trong số dấu chấm động biểu diễn dạng 32 bit trong máy tính, thành phần số mũ có độ dài bao nhiêu bit?",
  options: ["6 bit", "7 bit", "8 bit", "9 bit"],
  answer: "8 bit"
},
{
  question: "Chữ số L trong hệ đếm La mã tương ứng với giá trị nào trong các giá trị sau đây:",
  options: ["50", "100", "500", "1000"],
  answer: "50"
},
{
  question: "Chữ số C trong hệ đếm La mã tương ứng với giá trị thập phân nào trong các giá trị sau đây:",
  options: ["20", "100", "200", "500"],
  answer: "100"
},
{
  question: "Chữ số D trong hệ đếm La mã tương ứng với giá trị thập phân nào trong các giá trị sau đây:",
  options: ["100", "200", "500", "1000"],
  answer: "500"
},
{
  question: "Chữ số M trong hệ đếm La mã tương ứng với giá trị thập phân nào trong các giá trị sau đây:",
  options: ["50", "100", "500", "1000"],
  answer: "1000"
},
{
  question: "Trong hệ La mã số LD nhận giá trị thập phân nào trong các giá trị sau đây:",
  options: ["350","450","550","650"],
  answer: "450"        
},
{
  question: "Trong hệ La mã số MCL nhận giá trị thập phân nào trong các giá trị sau đây:",
  options: ["1150","1050","950","650"],
  answer: "1150"        
},
{
  question: "Trong hệ La mã số MMCMLXXVI nhận giá trị thập phân nào trong các giá trị sau đây:",
  options: ["1846","2756","2866","2976"],
  answer: "2976"        
},
{
  question: "Trong hệ nhị phân số 11101.11(2) tương ứng với giá trị thập phân nào trong các giá trị sau đây:",
  options: ["26,75", "29,75", "29,65", "26,65"],
  answer: "29,75"
},
{
  question: "Trong hệ nhị phân số 10101.11(2) tương ứng với giá trị thập phân nào trong các giá trị sau đây:",
  options: ["21.75", "23.75", "21.65", "23.65"],
  answer: "21.75"
},
{
  question: "Trong hệ đếm bát phân, số 235.64(8) tương ứng với giá trị thập phân nào trong các giá trị sau đây?",
  options: [ "157.8125","165.8125", "157.825", "165.825"],
  answer: "157.8125"
},
{
  question: "Trong hệ đếm bát phân số 237.64(8) tương ứng với giá trị thập phân nào trong các giá trị sau đây?",
  options: [ "157.8125","159.8125","157.825","159.825"],
  answer: "159.8125"
},
{
  question: "Số 247(10) tương ứng với giá trị nhị phân nào trong các giá trị sau đây?",
  options: [
    "10001011(2)",
    "11100111(2)",
    "11110111(2)",
    "11010111(2)"
  ],
  answer: "11110111(2)"
},
{
  question: "Số 285(10) tương ứng với giá trị nhị phân nào trong các giá trị sau đây?",
  options: [
    "100001011(2)",
    "100011101(2)",
    "100101011(2)",
    "100101001(2)"
  ],
 answer: "100011101(2)"
},
{
  question: "Bộ mã ASCII mở rộng gồm bao nhiêu kí tự?",
  options: [
    "128",
    "256",
    "512",
    "1024"
  ],
  answer: "256"
},
{
  question: "Bộ mã ASCII cơ sở gồm bao nhiêu kí tự?",
  options: [
    "128",
    "256",
    "512",
    "1024"
  ],
  answer: "128"
},
{
  question: "Bộ mã ASCII cơ sở gồm các kí tự được mã hóa bằng bao nhiêu bit?",
  options: [
    "6 bit",
    "7 bit",
    "8 bit",
    "9 bit"
  ],
 answer: "7 bit"
},
{
  question: "Các kí tự được bổ sung trong bộ mã ASCII mở rộng là các kí tự gì?",
  options: [
    "Kí tự điều khiển",
    "Kí tự đồ họa",
    "Kí tự chữ cái",
    "Kí tự chữ số"
  ],
  answer: "Kí tự đồ họa"
},
{
  question: "Mã NBCD biểu diễn mỗi chữ số thập phân bằng bao nhiêu bit?",
  options: [
    "3 bit",
    "4 bit",
    "6 bit",
    "8 bit"
  ],
  answer: "4 bit"
},
{
  question: "Mã EBCDIC biểu diễn mỗi kí tự bằng bao nhiêu bit?",
  options: [
    "4 bit",
    "5 bit",
    "6 bit",
    "8 bit"
  ],
  answer: "8 bit"
},
{
  question: "Mã NBCD là gì?",
  options: [
    "Mã sử dụng các bit nhị phân để biểu diễn các chữ số hệ thập phân",
    "Mã sử dụng các bit nhị phân để biểu diễn các chữ số hexa",
    "Mã sử dụng các bit nhị phân để biểu diễn các chữ số hệ bát phân",
    "Mã sử dụng các bit nhị phân để biểu diễn các kí tự ASCII"
  ],
  answer: "Mã sử dụng các bit nhị phân để biểu diễn các chữ số hệ thập phân"
},
{
  question: "Mã ASCII của chữ số 0 bằng bao nhiêu?",
  options: [
    "25H",
    "30H",
    "36H",
    "40H"
  ],
  answer: "30H"
},
{
  question: "Mã ASCII của chữ số 9 bằng bao nhiêu?",
  options: [
    "25H",
    "36H",
    "39H",
    "40H"
  ],
  answer: "39H"
},
{
  question: "Mã ASCII của chữ cái A bằng bao nhiêu?",
  options: [
    "35H",
    "37H",
    "39H",
    "41H"
  ],
  answer: "41H"
},
{
  question: "Cơ chế ống lệnh (pipeline) trong CPU giúp cải thiện hiệu suất bằng cách nào?",
  options: [
    "Tăng tốc độ xung nhịp của CPU",
    "Thực hiện nhiều lệnh cùng một lúc bằng cách chia nhỏ từng lệnh",
    "Giảm số lượng lệnh cần thực hiện",
    "Tăng số lượng bộ nhớ truy cập"
  ],
  answer: "Thực hiện nhiều lệnh cùng một lúc bằng cách chia nhỏ từng lệnh"
},
{
  question: "Giai đoạn đầu tiên trong cơ chế ống lệnh (pipeline) của CPU là gì?",
  options: [
    "Thực thi lệnh",
    "Nạp lệnh (Fetch)",
    "Giải mã lệnh",
    "Viết kết quả vào thanh ghi"
  ],
  answer: "Nạp lệnh (Fetch)"
},
{
  question: "Một trong những vấn đề chính của ống lệnh (pipeline) là gì?",
  options: [
    "Xung đột dữ liệu (Data hazards)",
    "Tăng số lượng CPU cores",
    "Thực hiện tuần tự các lệnh",
    "Giảm số lượng lệnh song song"
  ],
  answer: "Xung đột dữ liệu (Data hazards)"
},
{
  question: "\"Hazard\" trong cơ chế ống lệnh (pipeline) có nghĩa là gì?",
  options: [
    "Một phương pháp tối ưu hóa hiệu suất",
    "Xung đột hoặc trở ngại làm chậm quá trình thực thi lệnh",
    "Một cơ chế tăng cường bộ nhớ cache",
    "Cách phân bổ tài nguyên cho các lệnh song song"
  ],
  answer: "Xung đột hoặc trở ngại làm chậm quá trình thực thi lệnh"
},
{
  question: "Bus hệ thống của máy tính bao gồm:",
  options: [
    "Bus dữ liệu",
    "Bus dữ liệu và Bus địa chỉ",
    "Bus dữ liệu và Bus điều khiển",
    "Bus dữ liệu, Bus địa chỉ và Bus điều khiển"
  ],
  answer: "Bus dữ liệu, Bus địa chỉ và Bus điều khiển"
},
{
  question: "Chức năng của hệ thống Bus trong máy tính là gì?",
  options: [
    "Mở rộng chức năng giao tiếp của máy tính",
    "Liên kết các thành phần trong máy tính",
    "Điều khiển các thiết bị ngoại vi",
    "Biến đổi dạng tín hiệu trong máy tính"
  ],
  answer: "Liên kết các thành phần trong máy tính"
},
{
  question: "Bus nào trong máy tính có nhiệm vụ là đường truyền dẫn giữa CPU và các chip hỗ trợ trung gian?",
  options: [
    "Bus trong bộ vi xử lý",
    "Bus bộ vi xử lý",
    "Bus ngoại vi",
    "Bus hệ thống"
  ],
  answer: "Bus bộ vi xử lý"
},
{
  question: "Bus nào trong máy tính có nhiệm vụ là đường truyền dẫn giữa các khối của bộ vi xử lý?",
  options: [
    "Bus trong bộ vi xử lý",
    "Bus bộ vi xử lý",
    "Bus ngoại vi",
    "Bus hệ thống"
  ],
  answer: "Bus trong bộ vi xử lý"
},
{
  question: "Bus nào trong máy tính có nhiệm vụ kết nối bộ vi xử lý với bộ nhớ chính và bộ nhớ Cache?",
  options: [
    "Bus trong bộ vi xử lý",
    "Bus bộ vi xử lý",
    "Bus ngoại vi",
    "Bus hệ thống"
  ],
  answer: "Bus hệ thống"
},
{
  question: "Chức năng của Bus hệ thống trong máy tính là gì?",
  options: [
    "Là đường truyền dẫn giữa các khối của bộ vi xử lý",
    "Kết nối bộ vi xử lý với bộ nhớ chính, bộ nhớ Cache và các bộ điều khiển ghép nối vào ra",
    "Kết nối hệ thống vào ra với bộ vi xử lý",
    "Đường truyền dẫn giữa CPU và các chip hỗ trợ trung gian"
  ],
  answer: "Kết nối bộ vi xử lý với bộ nhớ chính, bộ nhớ Cache và các bộ điều khiển ghép nối vào ra"
},
{
  question: "Đặc điểm quan trọng của Bus đồng bộ là gì?",
  options: [
    "Dữ liệu được truyền đồng thời",
    "Dữ liệu được truyền không đồng thời",
    "Có tín hiệu đồng hồ chung điều khiển hoạt động",
    "Không có tín hiệu đồng hồ chung điều khiển hoạt động"
  ],
  answer: "Có tín hiệu đồng hồ chung điều khiển hoạt động"
},
{
  question: "Một trong các đặc điểm của Bus đồng bộ là:",
  options: [
    "Chu kỳ Bus thay đổi với từng cặp thiết bị trao đổi dữ liệu",
    "Dữ liệu được truyền liên tục trong mọi chu kỳ Bus",
    "Mọi thao tác được thực hiện trong những khoảng thời gian là bội số của chu kỳ Bus",
    "Tần số tín hiệu đồng hồ chung thay đổi tùy theo điều kiện của hệ thống"
  ],
  answer: "Mọi thao tác được thực hiện trong những khoảng thời gian là bội số của chu kỳ Bus"
},
{
  question: "Đặc điểm quan trọng của Bus không đồng bộ là gì?",
  options: [
    "Dữ liệu được truyền không đồng thời",
    "Có tín hiệu đồng hồ chung điều khiển hoạt động",
    "Không có tín hiệu đồng hồ chung điều khiển hoạt động",
    "Dữ liệu được truyền đồng thời"
  ],
  answer: "Không có tín hiệu đồng hồ chung điều khiển hoạt động"
},
{
  question: "Trong các đặc điểm sau, đặc điểm nào không phải của Bus đồng bộ?",
  options: [
    "Chu kỳ Bus không thay đổi với mọi cặp thiết bị trao đổi dữ liệu",
    "Hệ thống được định thời một cách gián đoạn",
    "Mọi thao tác được thực hiện trong những khoảng thời gian là bội số của chu kỳ Bus",
    "Việc trao đổi dữ liệu giữa các thiết bị cần có tín hiệu handshake"
  ],
  answer: "Việc trao đổi dữ liệu giữa các thiết bị cần có tín hiệu handshake"
},
{
  question: "Tại sao trong thực tế Bus đồng bộ được sử dụng rộng rãi hơn Bus không đồng bộ?",
  options: [
    "Tận dụng tốt thời gian xử lý của CPU",
    "Việc điều khiển hoạt động của máy tính dễ dàng hơn",
    "Dễ tận dụng các tiến bộ của công nghệ",
    "Cho phép thay đổi chu kỳ Bus một cách mềm dẻo"
  ],
  answer: "Việc điều khiển hoạt động của máy tính dễ dàng hơn"
},
{
  question: "Trong trường hợp nào nên sử dụng Bus không đồng bộ?",
  options: [
    "Khi hệ thống có nhiều thiết bị với tốc độ chênh lệch nhau rất lớn",
    "Khi hệ thống có nhiều thiết bị với tốc độ chênh lệch nhau rất nhỏ",
    "Mọi thao tác hầu hết có thời gian xử lý bằng bội số của chu kỳ Bus",
    "Yêu cầu dễ dàng trong việc điều khiển hoạt động của máy tính"
  ],
  answer: "Khi hệ thống có nhiều thiết bị với tốc độ chênh lệch nhau rất lớn"
},
{
  question: "Trong trường hợp nào nên sử dụng Bus đồng bộ?",
  options: [
    "Khi hệ thống có nhiều thiết bị với tốc độ chênh lệch nhau rất lớn",
    "Yêu cầu chu kỳ Bus có thể thay đổi với từng cặp thiết bị trao đổi dữ liệu",
    "Mọi thao tác hầu hết có thời gian xử lý bằng bội số của chu kỳ Bus",
    "Yêu cầu tận dụng tốt thời gian xử lý của CPU"
  ],
  answer: "Mọi thao tác hầu hết có thời gian xử lý bằng bội số của chu kỳ Bus"
},
{
  question: "Bus nào trong máy tính có nhiệm vụ kết nối các thiết bị vào ra với bộ vi xử lý?",
  options: [
    "Bus trong bộ vi xử lý",
    "Bus bộ vi xử lý",
    "Bus ngoại vi",
    "Bus hệ thống"
  ],
  answer: "Bus ngoại vi"
},
{
  question: "Chức năng của Bus ngoại vi trong máy tính là gì?",
  options: [
    "Là đường truyền dẫn giữa các khối của bộ vi xử lý",
    "Kết nối bộ vi xử lý với bộ nhớ chính và bộ nhớ Cache",
    "Kết nối hệ thống vào ra với bộ vi xử lý",
    "Đường truyền dẫn giữa CPU và các chip hỗ trợ trung gian"
  ],
  answer: "Kết nối hệ thống vào ra với bộ vi xử lý"
},
{
  question: "Chức năng của Bus bộ vi xử lý trong máy tính là gì?",
  options: [
    "Là đường truyền dẫn giữa các khối của bộ vi xử lý",
    "Kết nối bộ vi xử lý với bộ nhớ chính và bộ nhớ Cache",
    "Kết nối hệ thống vào ra với bộ vi xử lý",
    "Đường truyền dẫn giữa CPU và các vi mạch hỗ trợ"
  ],
  answer: "Đường truyền dẫn giữa CPU và các vi mạch hỗ trợ"
},
{
  question: "Chức năng của Bus trong bộ vi xử lý của máy tính là gì?",
  options: [
    "Là đường truyền dẫn giữa các khối của bộ vi xử lý",
    "Kết nối bộ vi xử lý với bộ nhớ chính và bộ nhớ Cache",
    "Kết nối hệ thống vào ra với bộ vi xử lý",
    "Đường truyền dẫn giữa CPU và các chip hỗ trợ trung gian"
  ],
  answer: "Là đường truyền dẫn giữa các khối của bộ vi xử lý"
},
{
  question: "So với Bus không đồng bộ, Bus đồng bộ có đặc điểm là:",
  options: [
    "Việc điều khiển hoạt động của máy tính khó khăn hơn",
    "Việc điều khiển hoạt động của máy tính dễ dàng hơn",
    "Thiết kế hệ thống Bus khó khăn hơn",
    "Dễ tận dụng tiến bộ của công nghệ chế tạo trong chế tạo Bus"
  ],
  answer: "Việc điều khiển hoạt động của máy tính dễ dàng hơn"
},
{
  question: "So với Bus đồng bộ, Bus không đồng bộ có đặc điểm là:",
  options: [
    "Việc điều khiển hoạt động của máy tính khó khăn hơn",
    "Việc điều khiển hoạt động của máy tính dễ dàng hơn",
    "Thiết kế hệ thống Bus dễ dàng hơn",
    "Khó tận dụng tiến bộ của công nghệ chế tạo trong chế tạo hệ thống Bus"
  ],
  answer: "Việc điều khiển hoạt động của máy tính khó khăn hơn"
},
{
  question: "Trong trường hợp sử dụng Bus đồng bộ, nếu một thao tác có thời gian hoàn thành bằng 3,2 chu kỳ thì trong thực tế nó sẽ được thực hiện trong mấy chu kỳ?",
  options: [
    "3",
    "3,2",
    "4",
    "4,2"
  ],
  answer: "4"
},
{
  question: "Trong trường hợp sử dụng Bus không đồng bộ, nếu một thao tác có thời gian hoàn thành bằng 3,2 chu kỳ thì trong thực tế nó sẽ được thực hiện trong mấy chu kỳ?",
  options: [
    "3",
    "3,2",
    "4",
    "4,2"
  ],
  answer: "3,2"
},
{
  question: "Độ rộng của Bus được xác định bởi:",
  options: [
    "Số đường dây dữ liệu của Bus",
    "Số thành phần được kết nối tới Bus",
    "Số Byte dữ liệu được truyền trong một đơn vị thời gian",
    "Số Bit dữ liệu được truyền trong một đơn vị thời gian"
  ],
  answer: "Số đường dây dữ liệu của Bus"
},
{
  question: "Tần số Bus đặc trưng cho:",
  options: [
    "Tốc độ điều khiển các thành phần của máy tính",
    "Tốc độ truyền dữ liệu trên Bus",
    "Tốc độ phân phối tài nguyên trong máy tính",
    "Tốc độ cấp phát bộ nhớ cho các thành phần trong máy tính"
  ],
  answer: "Tốc độ truyền dữ liệu trên Bus"
},
{
  question: "Dải thông Bus được xác định bởi:",
  options: [
    "Số lượng Byte chuyển qua Bus trong một chu kỳ xung nhịp",
    "Số lượng Bit chuyển qua Bus trong một chu kỳ xung nhịp",
    "Số lượng Byte chuyển qua Bus trong một đơn vị thời gian",
    "Số lượng Bit chuyển qua Bus trong một đơn vị thời gian"
  ],
  answer: "Số lượng Byte chuyển qua Bus trong một đơn vị thời gian"
},
{
  question: "Tham số nào đặc trưng cho tốc độ truyền dữ liệu trên Bus?",
  options: [
    "Dải thông của Bus",
    "Tần số của Bus",
    "Độ rộng của Bus",
    "Cả ba tham số trên"
  ],
  answer: "Tần số của Bus"
},
{
  question: "Tham số nào cho biết số lượng Byte chuyển qua Bus trong một đơn vị thời gian?",
  options: [
    "Dải thông của Bus",
    "Tần số của Bus",
    "Độ rộng của Bus",
    "Cả ba tham số trên"
  ],
  answer: "Dải thông của Bus"
},
{
  question: "Tham số nào của Bus cho biết đường dây của nó?",
  options: [
    "Dải thông của Bus",
    "Tần số của Bus",
    "Độ rộng của Bus",
    "Cả ba tham số trên"
  ],
  answer: "Độ rộng của Bus"
},
{
  question: "Trong các Bus sau, Bus nào là Bus một chiều?",
  options: [
    "Bus dữ liệu bên trong bộ vi xử lý",
    "Bus dữ liệu giữa bộ vi xử lý và bộ nhớ",
    "Bus địa chỉ",
    "Bus điều khiển"
  ],
  answer: "Bus địa chỉ"
},
{
  question: "Bus dữ liệu trong máy tính là:",
  options: [
    "Bus một chiều",
    "Bus hai chiều với từng đường dây",
    "Bus một chiều với từng đường dây nhưng là hai chiều với toàn bộ Bus",
    "Bus có độ rộng thay đổi"
  ],
  answer: "Bus hai chiều với từng đường dây"
},
{
  question: "Bus địa chỉ trong máy tính là:",
  options: [
    "Bus một chiều",
    "Bus hai chiều với từng đường dây",
    "Bus một chiều với từng đường dây nhưng là hai chiều với toàn bộ Bus",
    "Bus có độ rộng thay đổi"
  ],
  answer: "Bus một chiều"
},
{
  question: "Bus điều khiển trong máy tính là:",
  options: [
    "Bus một chiều",
    "Bus hai chiều với từng đường dây",
    "Bus một chiều với từng đường dây, là hai chiều với toàn bộ Bus",
    "Bus có độ rộng thay đổi"
  ],
  answer: "Bus một chiều với từng đường dây, là hai chiều với toàn bộ Bus"
},
{
  question: "Trong các Bus sau, Bus nào là Bus hai chiều đối với mỗi đường tín hiệu?",
  options: [
    "Bus dữ liệu",
    "Bus địa chỉ cho bộ nhớ",
    "Bus địa chỉ cho ngoại vi",
    "Bus điều khiển"
  ],
  answer: "Bus dữ liệu"
},
{
  question: "Bus ISA có tần số là 8MHz, độ rộng Bus bằng 16 bit, thời gian truyền một khối 16 bit cần 2 chu kỳ. Khi đó dải thông của Bus bằng:",
  options: [
    "4 MB/s",
    "8 MB/s",
    "16 MB/s",
    "32 MB/s"
  ],
  answer: "8 MB/s"
},
{
  question: "Bus PCI có tần số là 33MHz, độ rộng Bus bằng 32 bit, thời gian truyền một khối 32 bit cần 2 chu kỳ. Khi đó dải thông của Bus bằng:",
  options: [
    "8 MB/s",
    "16 MB/s",
    "33 MB/s",
    "66 MB/s"
  ],
  answer: "66 MB/s"
},
{
  question: "Trọng tài Bus có chức năng gì?",
  options: [
    "Giải quyết vấn đề tranh chấp làm chủ Bus",
    "Giải quyết vấn đề cấp phát bộ vi xử lý cho các thao tác",
    "Giải quyết điều khiển bộ vi xử lý thực hiện các thao tác trao đổi với các thiết bị ngoại vi nối tới Bus",
    "Giải quyết vấn đề cấp phát bộ nhớ cho các thao tác của các thiết bị ngoại vi nối tới Bus"
  ],
  answer: "Giải quyết vấn đề tranh chấp làm chủ Bus"
},
{
  question: "Đặc điểm của trọng tài Bus tập trung:",
  options: [
    "Việc phân chia quyền sử dụng Bus do một đơn vị trọng tài Bus duy nhất đảm nhiệm",
    "Việc phân chia quyền sử dụng Bus do các thiết bị ngoại vi tự thực hiện",
    "Đơn vị trọng tài Bus đồng thời làm chủ Bus",
    "Đơn vị trọng tài Bus nằm ở vị trí trung tâm của máy tính"
  ],
  answer: "Việc phân chia quyền sử dụng Bus do một đơn vị trọng tài Bus duy nhất đảm nhiệm"
},
{
  question: "Đặc điểm của trọng tài Bus không tập trung với multibus:",
  options: [
    "Việc phân chia quyền sử dụng Bus do các thiết bị ngoại vi tự thực hiện",
    "Việc phân chia quyền sử dụng Bus không cần một đơn vị trọng tài Bus riêng biệt",
    "Đơn vị trọng tài Bus đồng thời làm chủ Bus",
    "Đơn vị trọng tài Bus không nằm ở vị trí trung tâm của máy tính"
  ],
  answer: "Việc phân chia quyền sử dụng Bus không cần một đơn vị trọng tài Bus riêng biệt"
},
{
  question: "Đặc điểm của trọng tài Bus tập trung một mức:",
  options: [
    "Các thiết bị nối với đơn vị trọng tài Bus bằng một dây duy nhất",
    "Các thiết bị ngoại vi dùng chung một đường dây yêu cầu Bus",
    "Các thiết bị ngoại vi dùng chung một đường dây cho phép sử dụng Bus",
    "Mỗi thiết bị ngoại vi có một đường dây yêu cầu Bus riêng"
  ],
  answer: "Các thiết bị ngoại vi dùng chung một đường dây yêu cầu Bus"
},
{
  question: "Đặc điểm của trọng tài Bus tập trung nhiều mức:",
  options: [
    "Các thiết bị nối với đơn vị trọng tài Bus bằng một dây duy nhất",
    "Các thiết bị ngoại vi được nối tới các đường dây yêu cầu Bus khác nhau",
    "Các thiết bị ngoại vi được nối tới tất cả các đường dây yêu cầu Bus",
    "Mỗi thiết bị ngoại vi có một đường dây yêu cầu Bus riêng"
  ],
  answer: "Các thiết bị ngoại vi được nối tới các đường dây yêu cầu Bus khác nhau"
},
{
  question: "Trong kiểu trọng tài Bus nào thì việc phân chia quyền sử dụng Bus do một đơn vị trọng tài Bus duy nhất đảm nhiệm?",
  options: [
    "Trọng tài Bus không tập trung",
    "Trọng tài Bus tập trung",
    "Cả hai kiểu trên",
    "Không có kiểu nào trong hai kiểu trên"
  ],
  answer: "Trọng tài Bus tập trung"
},
{
  question: "Trong kiểu trọng tài Bus nào thì việc phân chia quyền sử dụng Bus không cần một đơn vị trọng tài Bus riêng biệt?",
  options: [
    "Trọng tài Bus không tập trung",
    "Trọng tài Bus tập trung",
    "Trọng tài Bus tập trung một mức",
    "Trọng tài Bus tập trung nhiều mức"
  ],
  answer: "Trọng tài Bus không tập trung"
},
{
  question: "Trong kiểu trọng tài Bus nào thì các thiết bị ngoại vi dùng chung một đường dây yêu cầu Bus?",
  options: [
    "Trọng tài Bus không tập trung",
    "Trọng tài Bus tập trung",
    "Trọng tài Bus tập trung một mức",
    "Trọng tài Bus tập trung nhiều mức"
  ],
  answer: "Trọng tài Bus tập trung một mức"
},
{
  question: "Trong kiểu trọng tài Bus nào thì các thiết bị ngoại vi được nối với các đường dây yêu cầu Bus khác nhau?",
  options: [
    "Trọng tài Bus không tập trung",
    "Trọng tài Bus tập trung",
    "Trọng tài Bus tập trung một mức",
    "Trọng tài Bus tập trung nhiều mức"
  ],
  answer: "Trọng tài Bus tập trung nhiều mức"
},
{
  question: "Thành phần nào có thể đóng vai trò chủ Bus (Bus Master)?",
  options: [
    "Chỉ CPU có thể đóng vai trò chủ Bus",
    "Chỉ các chip vào ra IO có thể đóng vai trò chủ Bus",
    "CPU hoặc các chip vào ra IO đều có thể đóng vai trò chủ Bus",
    "Chỉ một chip vào ra IO duy nhất được chỉ định đóng vai trò chủ Bus"
  ],
  answer: "CPU hoặc các chip vào ra IO đều có thể đóng vai trò chủ Bus"
},
{
  question: "Bus dữ liệu của bộ vi xử lý Intel 8088 có bao nhiêu đường?",
  options: [
    "8 đường",
    "16 đường",
    "20 đường",
    "24 đường"
  ],
  answer: "8 đường"
},
{
  question: "Các đường dây IOR, IOW trong các máy tính sử dụng bộ vi xử lý 8086/8088 thuộc vào Bus nào?",
  options: [
    "Bus bộ vi xử lý",
    "Bus địa chỉ",
    "Bus dữ liệu",
    "Bus điều khiển"
  ],
  answer: "Bus điều khiển"
},
{
  question: "Các đường dây D0-D7 trong các máy tính sử dụng bộ vi xử lý Intel 8086/8088 thuộc vào Bus nào?",
  options: [
    "Bus địa chỉ",
    "Bus dữ liệu",
    "Bus điều khiển",
    "Bus bộ vi xử lý"
  ],
  answer: "Bus dữ liệu"
},
{
  question: "Các đường dây IOCHCHK, IOCHRDY trong các máy tính sử dụng bộ vi xử lý 8086/8088 thuộc vào Bus nào?",
  options: [
    "Bus địa chỉ",
    "Bus dữ liệu",
    "Bus điều khiển",
    "Bus bộ vi xử lý"
  ],
  answer: "Bus điều khiển"
},
{
  question: "Các đường dây A0-A19 trong các máy tính sử dụng bộ vi xử lý 8086/8088 thuộc vào Bus nào?",
  options: [
    "Bus địa chỉ",
    "Bus dữ liệu",
    "Bus điều khiển",
    "Bus bộ vi xử lý"
  ],
  answer: "Bus địa chỉ"
},
{
  question: "Các đường dây DACK0-DACK3 trong các máy tính sử dụng bộ vi xử lý 8086/8088 thuộc vào Bus nào?",
  options: [
    "Bus địa chỉ",
    "Bus dữ liệu",
    "Bus điều khiển",
    "Bus bộ vi xử lý"
  ],
  answer: "Bus điều khiển"
},
{
  question: "Tín hiệu ALE trong Bus IBM PC có chức năng gì?",
  options: [
    "Chốt dữ liệu",
    "Chốt địa chỉ",
    "Chốt tín hiệu điều khiển",
    "Chốt tín hiệu yêu cầu ngắt"
  ],
  answer: "Chốt địa chỉ"
},
{
  question: "Tín hiệu AEN trong Bus IBM PC thuộc vào Bus nào?",
  options: [
    "Bus địa chỉ",
    "Bus dữ liệu",
    "Bus điều khiển",
    "Bus bộ vi xử lý"
  ],
  answer: "Bus điều khiển"
},
{
  question: "Các đường IRQ trong các Bus máy tính IBM PC có chức năng gì?",
  options: [
    "Các yêu cầu sử dụng Bus",
    "Các yêu cầu DMA",
    "Các yêu cầu truy nhập bộ nhớ",
    "Các yêu cầu ngắt"
  ],
  answer: "Các yêu cầu ngắt"
},
{
  question: "Các đường DRQ trong các Bus máy tính IBM PC có chức năng gì?",
  options: [
    "Các yêu cầu sử dụng Bus",
    "Các yêu cầu truy nhập bộ nhớ trực tiếp DMA",
    "Các yêu cầu truy nhập bộ nhớ",
    "Các yêu cầu ngắt"
  ],
  answer: "Các yêu cầu truy nhập bộ nhớ trực tiếp DMA"
},
{
  question: "Bus EISA có tần số là 8MHz, độ rộng Bus bằng 32 bit, thời gian truyền một khối 32 bit cần 2 chu kỳ. Khi đó dải thông của Bus bằng:",
  options: [
    "4 MB/s",
    "8 MB/s",
    "16 MB/s",
    "32 MB/s"
  ],
  answer: "16 MB/s"
},
{
  question: "Bus MCA có tần số là 10MHz, độ rộng Bus bằng 32 bit, thời gian truyền một khối 32 bit cần 2 chu kỳ. Khi đó dải thông của Bus bằng:",
  options: [
    "5 MB/s",
    "10 MB/s",
    "20 MB/s",
    "40 MB/s"
  ],
  answer: "20 MB/s"
},
{
  question: "Bus USB là gì?",
  options: [
    "Bus tuần tự tiên tiến",
    "Bus tuần tự mở rộng",
    "Bus tuần tự đa năng",
    "Bus tuần tự kết hợp"
  ],
  answer: "Bus tuần tự đa năng"
},
{
  question: "Giao diện Bus USB có bao nhiêu đường dây?",
  options: [
    "2 đường",
    "4 đường",
    "6 đường",
    "8 đường"
  ],
  answer: "4 đường"
},
{
  question: "Bus USB có bao nhiêu dây truyền dữ liệu?",
  options: [
    "2 đường",
    "4 đường",
    "6 đường",
    "8 đường"
  ],
  answer: "2 đường"
},
{
  question: "Đặc điểm của Bus USB",
  options: [
    "Truyền dữ liệu theo phương pháp vi sai",
    "Truyền dữ liệu theo phương pháp song song",
    "Truyền dữ liệu theo cáp chuẩn IDE",
    "Truyền dữ liệu theo cáp chuẩn RS-232"
  ],
  answer: "Truyền dữ liệu theo phương pháp vi sai"
},
{
  question: "Chuẩn USB 2.0 có tốc độ truyền dữ liệu bằng bao nhiêu?",
  options: [
    "Khoảng 110 – 180 Mbit/s",
    "Khoảng 200 – 320 Mbit/s",
    "Khoảng 360 – 480 Mbit/s",
    "Khoảng 500 – 640 Mbit/s"
  ],
  answer: "Khoảng 360 – 480 Mbit/s"
},
{
  question: "Có thể có tối đa bao nhiêu thiết bị USB nối tới một USB Hub?",
  options: [
    "63",
    "127",
    "255",
    "511"
  ],
  answer: "127"
},
{
  question: "Bus IBM PC cho máy tính IBM PC/AT sử dụng bộ vi xử lý nào sau đây của Intel?",
  options: [
    "8085",
    "8088",
    "80386",
    "80486"
  ],
  answer: "8088"
},
{
  question: "Các đường dây MEMR, MEMW trong các máy tính sử dụng bộ vi xử lý 8086/8088 thuộc vào Bus nào?",
  options: [
    "Bus địa chỉ",
    "Bus dữ liệu",
    "Bus điều khiển",
    "Bus bộ vi xử lý"
  ],
  answer: "Bus điều khiển"
},
{
  question: "Bus địa chỉ của bộ vi xử lý 8088 có bao nhiêu đường?",
  options: [
    "8 đường",
    "16 đường",
    "20 đường",
    "24 đường"
  ],
  answer: "20 đường"
},
{
  question: "Chức năng của tín hiệu RESET trong Bus IBM PC là gì?",
  options: [
    "Khởi động lại bộ vi xử lý",
    "Khởi động lại thiết bị I/O",
    "Khởi động lại bộ vi xử lý và thiết bị I/O",
    "Khởi động lại vi mạch 8284A"
  ],
  answer: "Khởi động lại bộ vi xử lý và thiết bị I/O"
},
{
  question: "Các chip 74LS373 trong Bus IBM PC có chức năng gì?",
  options: [
    "Đệm dữ liệu",
    "Chốt địa chỉ",
    "Chốt tín hiệu điều khiển",
    "Tạo tín hiệu chốt địa chỉ"
  ],
  answer: "Chốt địa chỉ"
},
{
  question: "Chip 74LS245 trong Bus IBM PC có chức năng gì?",
  options: [
    "Đệm dữ liệu",
    "Chốt địa chỉ",
    "Đệm tín hiệu điều khiển",
    "Tạo tín hiệu chốt địa chỉ"
  ],
  answer: "Đệm dữ liệu"
},
{
  question: "Chip 8259A trong Bus IBM PC có chức năng gì?",
  options: [
    "Đệm tín hiệu điều khiển",
    "Tạo dao động",
    "Bộ đếm và định thời",
    "Điều khiển ngắt"
  ],
  answer: "Điều khiển ngắt"
},
{
  question: "Trong cấu trúc bộ nhớ dạng 2N×M, phát biểu nào dưới đây đúng?",
  options: [
    "Bộ nhớ gồm 2N Byte và M module nhớ",
    "Bộ nhớ gồm 2N từ nhớ và M module nhớ",
    "Bộ nhớ gồm 2N ngăn nhớ, mỗi ngăn nhớ gồm M bit",
    "Bộ nhớ gồm 2N từ nhớ và M module nhớ"
  ],
  answer: "Bộ nhớ gồm 2N ngăn nhớ, mỗi ngăn nhớ gồm M bit"
},
{
  question: "Khái niệm truy xuất ngẫu nhiên đối với bộ nhớ có ý nghĩa như thế nào?",
  options: [
    "Dữ liệu trong bộ nhớ được đọc hay ghi vào các thời điểm ngẫu nhiên",
    "Dữ liệu trong bộ nhớ được định địa chỉ một cách ngẫu nhiên",
    "Dữ liệu trong bộ nhớ không được đọc hay ghi một cách tuần tự",
    "Dữ liệu trong bộ nhớ có giá trị ngẫu nhiên"
  ],
  answer: "Dữ liệu trong bộ nhớ không được đọc hay ghi một cách tuần tự"
},
{
  question: "Trong bộ nhớ ROM, thời gian truy nhập đối với ngăn nhớ có địa chỉ 00000H so với thời gian truy nhập đối với ngăn nhớ có địa chỉ 00FFFH như thế nào?",
  options: [
    "Lớn hơn",
    "Nhỏ hơn",
    "Bằng nhau",
    "Không so sánh được"
  ],
  answer: "Bằng nhau"
},
{
  question: "Trong bộ nhớ RAM, thời gian truy nhập đối với ngăn nhớ có địa chỉ 00000H so với thời gian truy nhập đối với ngăn nhớ có địa chỉ FFFFFH như thế nào?",
  options: [
    "Lớn hơn",
    "Nhỏ hơn",
    "Bằng nhau",
    "Không so sánh được"
  ],
  answer: "Bằng nhau"
},
{
  question: "Các bộ nhớ nào sau đây cho phép truy nhập ngẫu nhiên?",
  options: [
    "DRAM",
    "ROM",
    "Cache",
    "Cả ba loại trên"
  ],
  answer: "Cả ba loại trên"
},
{
  question: "Đặc điểm của bộ nhớ Cache là:",
  options: [
    "Dung lượng lớn",
    "Thời gian truy nhập lớn",
    "Thời gian truy nhập nhỏ",
    "Chi phí thấp"
  ],
  answer: "Thời gian truy nhập nhỏ"
},
{
  question: "Đặc điểm của bộ nhớ Cache là:",
  options: [
    "Có dung lượng lớn hơn bộ nhớ RAM",
    "Cho phép truy nhập nhanh hơn so với bộ nhớ DRAM",
    "Cho phép truy nhập nhanh hơn so với các thanh ghi của CPU",
    "Là bộ nhớ cố định"
  ],
  answer: "Cho phép truy nhập nhanh hơn so với bộ nhớ DRAM"
},
{
  question: "Chức năng của tín hiệu Chip Enable trong IC bộ nhớ là gì?",
  options: [
    "Cho phép đọc dữ liệu trong IC bộ nhớ",
    "Cho phép ghi dữ liệu vào IC bộ nhớ",
    "Cho phép IC bộ nhớ hoạt động",
    "Cho phép đọc, ghi đồng thời đối với IC bộ nhớ"
  ],
  answer: "Cho phép IC bộ nhớ hoạt động"
},
{
  question: "Đặc điểm của bộ nhớ ROM:",
  options: [
    "Cho phép ghi dữ liệu",
    "Chỉ cho phép đọc dữ liệu",
    "Bị mất dữ liệu khi không có nguồn cấp",
    "Cho phép ghi/đọc dữ liệu đồng thời tại một vị trí nhớ"
  ],
  answer: "Chỉ cho phép đọc dữ liệu"
},
{
  question: "Đặc điểm của bộ nhớ RAM nói chung",
  options: [
    "Cho phép ghi dữ liệu",
    "Chỉ cho phép đọc dữ liệu",
    "Không bị mất dữ liệu khi không có nguồn cấp",
    "Cho phép ghi/đọc dữ liệu đồng thời tại một vị trí nhớ"
  ],
  answer: "Cho phép ghi dữ liệu"
},
{
  question: "Đặc điểm của bộ nhớ SRAM",
  options: [
    "Phải được làm tươi theo chu kỳ",
    "Không phải làm tươi theo chu kỳ",
    "Thời gian truy nhập lớn",
    "Chi phí trên một bit nhớ thấp"
  ],
  answer: "Không phải làm tươi theo chu kỳ"
},
{
  question: "Đặc điểm của bộ nhớ DRAM",
  options: [
    "Thời gian truy nhập nhỏ",
    "Chi phí trên một bit nhớ cao",
    "Không phải làm tươi theo chu kỳ",
    "Phải được làm tươi theo chu kỳ"
  ],
  answer: "Phải được làm tươi theo chu kỳ"
},
{
  question: "Bộ nhớ Cache được cấu trúc từ loại bộ nhớ nào trong số các bộ nhớ sau đây?",
  options: [
    "SRAM",
    "DRAM",
    "ROM",
    "Flash ROM"
  ],
  answer: "SRAM"
},
{
  question: "Chức năng của bộ nhớ Cache trong máy tính là gì?",
  options: [
    "Giúp mở rộng dung lượng bộ nhớ",
    "Chứa các toán hạng là hằng số",
    "Lưu giữ dữ liệu mà bộ vi xử lý thường xuyên sử dụng",
    "Lưu giữ các tham số hệ thống"
  ],
  answer: "Lưu giữ dữ liệu mà bộ vi xử lý thường xuyên sử dụng"
},
{
  question: "Đường dây Read/Write trong IC bộ nhớ có chức năng là gì?",
  options: [
    "Cho biết bộ nhớ có cho phép đọc và ghi hay không",
    "Cho biết bộ nhớ có thể đọc và ghi đồng thời hay không",
    "Cho biết thao tác được thực hiện là đọc hay ghi",
    "Cho biết bộ nhớ có bị cấm đọc hay cấm ghi không"
  ],
  answer: "Cho biết thao tác được thực hiện là đọc hay ghi"
},
{
  question: "Trong các bộ nhớ sau, bộ nhớ nào yêu cầu làm tươi theo chu kỳ?",
  options: [
    "SRAM",
    "DRAM",
    "PROM",
    "EPROM"
  ],
  answer: "DRAM"
},
{
  question: "Trong các bộ nhớ SRAM và DRAM, loại nào tiêu thụ nguồn nuôi lớn hơn?",
  options: [
    "SRAM",
    "DRAM",
    "Bằng nhau",
    "Không so sánh được"
  ],
  answer: "SRAM"
},
{
  question: "Đặc điểm của bộ nhớ ROM là:",
  options: [
    "Cho phép truy nhập nhanh hơn bộ nhớ RAM",
    "Nội dung không bị thay đổi",
    "Lưu trữ được nhiều thông tin hơn bộ nhớ RAM",
    "Được sử dụng làm bộ nhớ Cache"
  ],
  answer: "Nội dung không bị thay đổi"
},
{
  question: "Phát biểu nào sau đây đúng?",
  options: [
    "Bộ nhớ SRAM rẻ hơn bộ nhớ DRAM",
    "Bộ nhớ SRAM được sử dụng chỉ tại thời điểm khởi động máy tính",
    "Bộ nhớ SRAM được sử dụng cho bộ nhớ Cache",
    "Bộ nhớ SRAM có thời gian truy nhập lớn hơn DRAM"
  ],
  answer: "Bộ nhớ SRAM được sử dụng cho bộ nhớ Cache"
},
{
  question: "Mạch chọn địa chỉ hàng và mạch chọn địa chỉ cột tạo thành mạch gì?",
  options: [
    "Mạch tạo địa chỉ bộ nhớ",
    "Mạch giải mã địa chỉ",
    "Mạch đọc/ghi dữ liệu bộ nhớ",
    "Mạch cho phép chốt địa chỉ bộ nhớ"
  ],
  answer: "Mạch giải mã địa chỉ"
},
{
  question: "Cấu tạo của một ô nhớ DRAM như thế nào?",
  options: [
    "Gồm hai tụ điện và một Transistor",
    "Gồm một tụ điện và một Transistor",
    "Gồm hai tụ điện và hai Transistor",
    "Gồm hai tụ điện và hai Transistor"
  ],
  answer: "Gồm một tụ điện và một Transistor"
},
{
  question: "Cấu tạo của một ô nhớ SRAM như thế nào?",
  options: [
    "Gồm hai tụ điện và ba Transistor",
    "Gồm ba tụ điện và hai Transistor",
    "Gồm bốn tụ điện và hai Transistor",
    "Gồm sáu Transistor"
  ],
  answer: "Gồm sáu Transistor"
},
{
  question: "Tốc độ truy nhập của bộ nhớ SRAM so với bộ nhớ DRAM như thế nào?",
  options: [
    "Chậm hơn",
    "Nhanh hơn",
    "Bằng nhau",
    "Không xác định được"
  ],
  answer: "Nhanh hơn"
},
{
  question: "Đối với bộ nhớ truy nhập ngẫu nhiên, điều nào sau đây đúng?",
  options: [
    "Dữ liệu của bộ nhớ được đọc hay ghi tại các thời điểm ngẫu nhiên",
    "Thời gian truy nhập vào bất kỳ ngăn nhớ nào trong bộ nhớ đều bằng nhau",
    "Dữ liệu trong bộ nhớ có giá trị ngẫu nhiên",
    "Dữ liệu trong bộ nhớ không được đọc hay ghi một cách tuần tự"
  ],
  answer: "Thời gian truy nhập vào bất kỳ ngăn nhớ nào trong bộ nhớ đều bằng nhau"
},
{
  question: "Đối với bộ nhớ truy nhập ngẫu nhiên, điều nào sau đây không đúng?",
  options: [
    "Để truy nhập vào bất kỳ ngăn nhớ nào trong bộ nhớ, ta chỉ cần xác định địa chỉ của nó",
    "Thời gian truy nhập vào bất kỳ ngăn nhớ nào trong bộ nhớ đều bằng nhau",
    "Địa chỉ các ngăn nhớ bao gồm địa chỉ hàng và địa chỉ cột",
    "Dữ liệu trong bộ nhớ không được đọc hay ghi một cách tuần tự theo địa chỉ của bộ nhớ"
  ],
  answer: "Dữ liệu trong bộ nhớ không được đọc hay ghi một cách tuần tự theo địa chỉ của bộ nhớ"
},
{
  question: "Đối với bộ nhớ SRAM, điều nào sau đây đúng?",
  options: [
    "Phải được làm tươi theo chu kỳ",
    "Thời gian truy nhập lớn",
    "Thời gian truy nhập nhỏ",
    "Chi phí trên một bit nhớ thấp"
  ],
  answer: "Thời gian truy nhập nhỏ"
},
{
  question: "Đối với bộ nhớ SRAM, điều nào sau đây không đúng?",
  options: [
    "Không phải làm tươi theo chu kỳ",
    "Thời gian truy nhập lớn",
    "Được dùng làm bộ nhớ Cache",
    "Chi phí trên một bit nhớ cao"
  ],
  answer: "Thời gian truy nhập lớn"
},
{
  question: "Đối với bộ nhớ ROM, điều nào sau đây đúng?",
  options: [
    "Là bộ nhớ truy nhập ngẫu nhiên",
    "Cho phép ghi dữ liệu",
    "Luôn có dung lượng lớn hơn bộ nhớ RAM",
    "Có thể được sử dụng làm bộ nhớ Cache"
  ],
  answer: "Là bộ nhớ truy nhập ngẫu nhiên"
},
{
  question: "Đối với bộ nhớ ROM, điều nào sau đây không đúng?",
  options: [
    "Là bộ nhớ truy nhập ngẫu nhiên",
    "Chỉ cho phép đọc dữ liệu",
    "Luôn có dung lượng lớn hơn bộ nhớ RAM",
    "Không được sử dụng làm bộ nhớ Cache"
  ],
  answer: "Luôn có dung lượng lớn hơn bộ nhớ RAM"
},
{
  question: "Trong các phát biểu sau, phát biểu nào đúng?",
  options: [
    "Bộ nhớ ROM không phải là bộ nhớ truy nhập ngẫu nhiên",
    "Bộ nhớ trong có dung lượng lớn hơn bộ nhớ ngoài",
    "Bộ nhớ Cache có tốc độ cao hơn bộ nhớ trong",
    "Bộ nhớ RAM luôn có dung lượng nhỏ hơn bộ nhớ Cache"
  ],
  answer: "Bộ nhớ Cache có tốc độ cao hơn bộ nhớ trong"
},
{
  question: "Chương trình BIOS được lưu trữ trong bộ nhớ thuộc loại nào?",
  options: [
    "RAM",
    "ROM",
    "Ổ đĩa cứng",
    "Cache"
  ],
  answer: "ROM"
},
{
  question: "Dung lượng của bộ nhớ được xác định bởi:",
  options: [
    "Số lượng dây dữ liệu trên Bus dữ liệu truy nhập bộ nhớ",
    "Số lượng bit hoặc từ mà bộ nhớ có thể lưu trữ",
    "Số lượng Module nhớ có trong bộ nhớ",
    "Số lượng bit dữ liệu được bộ nhớ trao đổi trong một đơn vị thời gian"
  ],
  answer: "Số lượng bit hoặc từ mà bộ nhớ có thể lưu trữ"
},
{
  question: "Thời gian truy nhập bộ nhớ được tính bằng:",
  options: [
    "Thời gian từ lúc khởi động chương trình tới khi nhận được dữ liệu từ bộ nhớ",
    "Thời gian từ khi nhận lệnh tới khi nhận được dữ liệu từ bộ nhớ",
    "Thời gian từ khi có tín hiệu Chip Enable tới khi nhận được dữ liệu",
    "Thời gian tồn tại của dữ liệu trên Bus hệ thống"
  ],
  answer: "Thời gian từ khi nhận lệnh tới khi nhận được dữ liệu từ bộ nhớ"
},
{
  question: "Bus địa chỉ 20 bit cho phép quản lý bộ nhớ với dung lượng tối đa bằng bao nhiêu?",
  options: [
    "1 MegaByte 2 mũ 20",
    "4 MegaByte",
    "8 MegaByte",
    "16 MegaByte"
  ],
  answer: "1 MegaByte 2 mũ 20"
},
{
  question: "Bus địa chỉ 32 bit cho phép quản lý bộ nhớ với dung lượng tối đa bằng bao nhiêu?",
  options: [
    "16 MegaByte",
    "64 MegaByte",
    "1 GigaByte",
    "4 GigaByte"
  ],
  answer: "4 GigaByte"
},
{
  question: "Bus địa chỉ 24 bit cho phép quản lý bộ nhớ với dung lượng tối đa bằng bao nhiêu?",
  options: [
    "8 MegaByte",
    "16 MegaByte",
    "32 MegaByte",
    "64 MegaByte"
  ],
  answer: "16 MegaByte"
},
{
  question: "Chương trình BIOS trong các máy tính hiện đại thường được lưu trữ trong bộ nhớ loại nào?",
  options: [
    "PROM",
    "EPROM",
    "EEPROM",
    "Flash ROM"
  ],
  answer: "EEPROM"
},
{
  question: "Đặc điểm của ROM mặt nạ (Maskable ROM) là gì?",
  options: [
    "Được nhà sản xuất nạp sẵn dữ liệu, người dùng không thể thay đổi dữ liệu",
    "Người dùng có thể nạp dữ liệu bằng thiết bị đốt ROM. Dữ liệu đã được nạp thì không thể thay đổi được nữa",
    "Người dùng có thể nạp hoặc xóa dữ liệu bằng thiết bị sử dụng tia cực tím",
    "Người dùng có thể nạp hoặc xóa dữ liệu bằng điện"
  ],
  answer: "Được nhà sản xuất nạp sẵn dữ liệu, người dùng không thể thay đổi dữ liệu"
},
{
  question: "Đặc điểm của PROM là gì?",
  options: [
    "Được nhà sản xuất nạp sẵn dữ liệu, người dùng không thể thay đổi dữ liệu",
    "Người dùng có thể nạp dữ liệu bằng thiết bị đốt ROM. Dữ liệu đã được nạp thì không thể thay đổi được nữa",
    "Người dùng có thể nạp hoặc xóa dữ liệu bằng thiết bị sử dụng tia cực tím",
    "Người dùng có thể nạp hoặc xóa dữ liệu bằng điện"
  ],
  answer: "Người dùng có thể nạp dữ liệu bằng thiết bị đốt ROM. Dữ liệu đã được nạp thì không thể thay đổi được nữa"
},
{
  question: "Đặc điểm của EPROM là gì?",
  options: [
    "Được nhà sản xuất nạp sẵn dữ liệu, người dùng không thể thay đổi dữ liệu",
    "Người dùng có thể nạp dữ liệu bằng thiết bị đốt ROM. Dữ liệu đã được nạp thì không thể thay đổi được nữa",
    "Người dùng có thể nạp hoặc xóa dữ liệu bằng thiết bị sử dụng tia cực tím",
    "Người dùng có thể nạp hoặc xóa dữ liệu bằng điện"
  ],
  answer: "Người dùng có thể nạp hoặc xóa dữ liệu bằng thiết bị sử dụng tia cực tím"
},
{
  question: "Đặc điểm của EEPROM là gì?",
  options: [
    "Được nhà sản xuất nạp sẵn dữ liệu, người dùng không thể thay đổi dữ liệu",
    "Người dùng có thể nạp dữ liệu bằng thiết bị đốt ROM. Dữ liệu đã được nạp thì không thể thay đổi được nữa",
    "Người dùng có thể nạp hoặc xóa dữ liệu bằng thiết bị sử dụng tia cực tím",
    "Người dùng có thể nạp hoặc xóa dữ liệu bằng điện"
  ],
  answer: "Người dùng có thể nạp hoặc xóa dữ liệu bằng điện"
},
{
  question: "Loại ROM nào mà người dùng có thể nạp dữ liệu bằng thiết bị đốt ROM?",
  options: [
    "ROM mặt nạ",
    "PROM",
    "EPROM",
    "EEPROM"
  ],
  answer: "PROM"
},
{
  question: "Loại ROM nào đã được nhà sản xuất nạp sẵn dữ liệu, người dùng không thể thay đổi dữ liệu?",
  options: [
    "ROM mặt nạ",
    "PROM",
    "EPROM",
    "EEPROM"
  ],
  answer: "ROM mặt nạ"
},
{
  question: "Loại ROM nào mà người dùng có thể nạp dữ liệu bằng thiết bị sử dụng tia cực tím?",
  options: [
    "ROM mặt nạ",
    "PROM",
    "EPROM",
    "EEPROM"
  ],
  answer: "EPROM"
},
{
  question: "Loại ROM nào mà người dùng có thể nạp dữ liệu bằng điện?",
  options: [
    "ROM mặt nạ",
    "PROM",
    "EPROM",
    "EEPROM"
  ],
  answer: "EEPROM"
},
{
  question: "Trong các máy tính hiện đại, thiết bị nhớ nào trong số các loại bộ nhớ sau thường có dung lượng nhỏ nhất?",
  options: [
    "ROM",
    "RAM",
    "Cache",
    "Ổ đĩa cứng"
  ],
  answer: "Cache"
},
{
  question: "Trong các máy tính hiện đại, thiết bị nhớ nào trong số các loại bộ nhớ sau thường có dung lượng lớn nhất?",
  options: [
    "ROM",
    "RAM",
    "Cache",
    "Ổ đĩa cứng"
  ],
  answer: "Ổ đĩa cứng"
},
{
  question: "Trong các máy tính hiện đại, thiết bị nhớ nào trong số các loại bộ nhớ sau có thời gian truy nhập nhỏ nhất?",
  options: [
    "ROM",
    "RAM",
    "Cache",
    "Ổ đĩa cứng"
  ],
  answer: "Cache"
},
{
  question: "Trong các máy tính hiện đại, thiết bị nhớ nào trong số các loại bộ nhớ sau có tốc độ truy nhập thấp nhất?",
  options: [
    "ROM",
    "RAM",
    "Cache",
    "Ổ đĩa cứng"
  ],
  answer: "Ổ đĩa cứng"
},
{
  question: "Chương trình BIOS lưu trong ROM CMOS được gọi là:",
  options: [
    "Hệ thống điều hành phần cứng cơ sở",
    "Hệ thống vào ra cơ sở",
    "Hệ thống kiểm tra máy tính khi khởi động",
    "Hệ thống quản lý phối ghép vào ra cơ sở"
  ],
  answer:  "Hệ thống vào ra cơ sở"
},
{
  question: "Địa chỉ OFFSET trong bộ vi xử lý Intel 8086 có kích thước bằng bao nhiêu?",
  options: [
    "8 bit",
    "16 bit",
    "24 bit",
    "32 bit"
  ],
  answer: "16 bit"
},
{
  question: "Dung lượng bộ nhớ Cache của máy tính sử dụng Bộ vi xử lý 80386 bằng bao nhiêu?",
  options: [
    "Khoảng dưới 1 Mbyte",
    "Khoảng trên 1 MByte",
    "Khoảng dưới 10 MByte",
    "Khoảng trên 10 MByte"
  ],
  answer: "Khoảng dưới 1 Mbyte"
},
{
  question: "Phát biểu nào sau đây đúng?",
  options: [
    "Bộ nhớ DRAM được sử dụng làm Cache trong máy tính",
    "Bộ nhớ DRAM có giá thành cao hơn SRAM",
    "Bộ nhớ DRAM có giá thành thấp hơn SRAM",
    "Bộ nhớ DRAM chỉ được sử dụng vào thời điểm khởi động máy tính"
  ],
  answer: "Bộ nhớ DRAM có giá thành thấp hơn SRAM"
},
{
  question: "Phát biểu nào sau đây đúng?",
  options: [
    "Bộ nhớ SRAM chỉ được sử dụng làm Cache trong máy tính",
    "Bộ nhớ SRAM có giá thành cao hơn DRAM",
    "Bộ nhớ SRAM có thời gian truy nhập lớn hơn DRAM",
    "Bộ nhớ SRAM chỉ được sử dụng vào thời điểm khởi động máy tính"
  ],
  answer: "Bộ nhớ SRAM có giá thành cao hơn DRAM"
},
{
  question: "Bộ nhớ SRAM lưu trữ thông tin bằng gì?",
  options: [
    "Tụ điện",
    "Flip-Flop",
    "Mạch lưỡng cực",
    "Mạch MOS"
  ],
  answer: "Flip-Flop"
},
{
  question: "Bộ nhớ DRAM cần các mạch bên ngoài để thực hiện chức năng gì?",
  options: [
    "Giải mã hàng",
    "Giải mã cột",
    "Làm tươi",
    "Giải mã ô nhớ"
  ],
  answer: "Làm tươi"
},
{
  question: "Một bộ nhớ 64 Kbit có thể được tổ chức theo kiểu nào?",
  options: [
    "64K × 1",
    "8K × 8",
    "16K × 4",
    "Tất cả các kiểu trên"
  ],
  answer: "Tất cả các kiểu trên"
},
{
  question: "Tại sao bộ nhớ DRAM phải được làm tươi?",
  options: [
    "Nếu không, các tụ điện sẽ bị đánh thủng",
    "Nếu không, nguồn cấp cho tụ điện sẽ hết và dữ liệu sẽ bị mất",
    "Nếu không, mạch điện sẽ tiêu thụ nhiều năng lượng hơn",
    "Nếu không, các ô nhớ sẽ bị định địa chỉ nhầm"
  ],
  answer: "Nếu không, nguồn cấp cho tụ điện sẽ hết và dữ liệu sẽ bị mất"
},
{
  question: "Tại sao với các hệ thống bộ nhớ dung lượng rất nhỏ, người ta không sử dụng bộ nhớ loại DRAM mà thường dùng loại SRAM?",
  options: [
    "Vì bộ nhớ DRAM đòi hỏi mạch làm tươi nên sẽ không kinh tế khi dùng với bộ nhớ có dung lượng nhỏ",
    "Vì bộ nhớ DRAM chỉ cho phép xây bộ nhớ với dung lượng lớn",
    "Vì bộ nhớ DRAM có thời gian truy nhập tăng lên khi dung lượng bộ nhớ nhỏ",
    "Vì bộ nhớ SRAM có thời gian truy nhập nhỏ hơn DRAM chỉ khi dùng cho bộ nhớ dung lượng nhỏ"
  ],
  answer: "Vì bộ nhớ DRAM đòi hỏi mạch làm tươi nên sẽ không kinh tế khi dùng với bộ nhớ có dung lượng nhỏ"
},
{
  question: "Bộ nhớ DRAM lưu trữ thông tin bằng gì?",
  options: [
    "Tụ điện",
    "Flip-Flop",
    "Mạch lưỡng cực",
    "Mạch MOS"
  ],
  answer: "Tụ điện"
},
{
  question: "Cơ chế quản lý bộ nhớ ảo trong máy tính sử dụng các bộ vi xử lý Intel 80x86 cho phép thực hiện các điều sau, loại trừ:",
  options: [
    "Quản lý không gian nhớ lớn hơn bộ nhớ vật lý",
    "Cho phép nhiều tiến trình cùng chia sẻ bộ nhớ vật lý",
    "Cho phép tăng tốc độ xử lý của bộ vi xử lý",
    "Cho phép bảo vệ các tiến trình thực hiện đồng thời"
  ],
  answer: "Cho phép tăng tốc độ xử lý của bộ vi xử lý"
},
{
  question: "Trong chế độ địa chỉ ảo, bộ vi xử lý Intel 80286 có thể quản lý được không gian nhớ có dung lượng bằng bao nhiêu?",
  options: [
    "128 Mbyte",
    "256 Mbyte",
    "512 Mbyte",
    "1 Gbyte"
  ],
  answer: "1 Gbyte"
},
{
  question: "Trong chế độ địa chỉ ảo của các bộ vi xử lý Intel 80x86, việc truy nhập dữ liệu trên các bộ nhớ ngoài có dung lượng vượt quá bộ nhớ thực của máy tính được thực hiện nhờ:",
  options: [
    "Việc chuyển dữ liệu từ bộ nhớ ngoài tới bộ vi xử lý qua các cổng vào ra",
    "Việc tráo đổi dữ liệu trên bộ nhớ ngoài với các mảng nhớ của bộ nhớ trong",
    "Sử dụng cơ chế truy nhập DMA",
    "Sử dụng cơ chế ngắt"
  ],
  answer: "Việc tráo đổi dữ liệu trên bộ nhớ ngoài với các mảng nhớ của bộ nhớ trong"
},
{
  question: "Trong chế độ địa chỉ ảo của các bộ vi xử lý Intel 80x86, dữ liệu cần truy nhập trên các bộ nhớ ngoài được tráo đổi với:",
  options: [
    "Các mảng nhớ đầu tiên trong RAM",
    "Các mảng nhớ cuối cùng trong RAM",
    "Các mảng nhớ ít được sử dụng nhất trong RAM",
    "Các mảng nhớ hay được sử dụng nhất trong RAM"
  ],
  answer: "Các mảng nhớ ít được sử dụng nhất trong RAM"
},
{
  question: "Các bộ nhớ RAM-ROM khác với các bộ nhớ ngoài ở những điều sau, ngoại trừ:",
  options: [
    "Cách mã hóa các bit",
    "Cách tổ chức bộ nhớ",
    "Cách truy nhập dữ liệu trên các phần tử của bộ nhớ",
    "Các vị trí nhớ dùng để lưu trữ các bit nhị phân"
  ],
  answer: "Các vị trí nhớ dùng để lưu trữ các bit nhị phân"
},
{
  question: "Hãy chỉ ra khẳng định sai trong các khẳng định sau đây:",
  options: [
    "Bộ nhớ trong là tập hợp các ô nhớ, mỗi ô nhớ có một số bit nhất định và chứa một thông tin được mã hoá thành số nhị phân mà không quan tâm đến kiểu của dữ liệu mà nó đang chứa",
    "Mỗi ô nhớ trong bộ nhớ trong đều tương ứng với một địa chỉ",
    "Thời gian truy cập vào mỗi ô nhớ trong bộ nhớ trong là ngẫu nhiên",
    "Bộ nhớ trong còn được gọi là bộ nhớ truy cập ngẫu nhiên"
  ],
  answer: "Thời gian truy cập vào mỗi ô nhớ trong bộ nhớ trong là ngẫu nhiên"
},
{
  question: "Đặc điểm của bộ nhớ ngoài so với bộ nhớ trong của máy tính là:",
  options: [
    "Tốc độ truy cập bộ nhớ thường rất cao",
    "Dung lượng nhỏ",
    "Không mất dữ liệu khi mất nguồn",
    "Giá thành cao"
  ],
  answer: "Không mất dữ liệu khi mất nguồn"
},
{
  question: "Một ưu điểm của bộ nhớ ngoài so với bộ nhớ trong của máy tính là:",
  options: [
    "Tốc độ truy cập nhanh",
    "Dung lượng lớn",
    "Kích thước nhỏ gọn",
    "Cấu tạo đơn giản"
  ],
  answer: "Dung lượng lớn"
},
{
  question: "So với bộ nhớ trong, bộ nhớ ngoài của máy tính có ưu điểm là:",
  options: [
    "Tốc độ truy cập nhanh",
    "Không bị mất dữ liệu khi mất nguồn",
    "Kích thước nhỏ gọn",
    "Cấu tạo đơn giản"
  ],
  answer: "Không bị mất dữ liệu khi mất nguồn"
},
{
  question: "Để lưu trữ số hexa FF cần sử dụng tối thiểu bao nhiêu Flip-Flop?",
  options: [
    "2",
    "4",
    "8",
    "19"
  ],
  answer: "8"
},
{
  question: "Đơn vị quản lý bộ nhớ trong máy tính có thể là:",
  options: [
    "Bộ vi xử lý",
    "Bộ điều khiển truy nhập DMA",
    "Bộ vi xử lý và bộ điều khiển truy nhập DMA",
    "Bộ điều khiển Bus"
  ],
  answer: "Bộ vi xử lý và bộ điều khiển truy nhập DMA"
},
{
  question: "Bộ vi xử lý nào sau đây của Intel hỗ trợ chế độ quản lý bộ nhớ ảo?",
  options: [
    "8085",
    "8086",
    "8088",
    "80286"
  ],
  answer: "80286"
},
{
  question: "Bộ vi xử lý nào sau đây của Intel không hỗ trợ chế độ quản lý bộ nhớ ảo?",
  options: [
    "8086",
    "80286",
    "80386",
    "80486"
  ],
  answer: "8086"
},
{
  question: "Trong chế độ địa chỉ thực, bộ vi xử lý Intel 80286 quản lý địa chỉ vật lý bao nhiêu bit?",
  options: [
    "16",
    "20",
    "24",
    "30"
  ],
  answer: "20"
},
{
  question: "Trong chế độ địa chỉ ảo, bộ vi xử lý Intel 80286 quản lý địa chỉ logic bao nhiêu bit?",
  options: [
    "16",
    "20",
    "24",
    "30"
  ],
  answer: "24"
},
{
  question: "Thanh ghi quản lý quản lý mảng nhớ trong bộ vi xử lý Intel 8086 có độ rộng bằng bao nhiêu?",
  options: [
    "8 bit",
    "16 bit",
    "24 bit",
    "32 bit"
  ],
  answer: "16 bit"
},
{
  question: "Địa chỉ OFFSET của bộ vi xử lý Intel 8086 có độ rộng gồm bao nhiêu bit?",
  options: [
    "8 bit",
    "16 bit",
    "24 bit",
    "32 bit"
  ],
  answer: "16 bit"
},
{
  question: "Khối điều khiển bộ nhớ Cache (Cache Memory Controller) có chức năng là:",
  options: [
    "Điều khiển việc truyền dữ liệu giữa bộ nhớ Cache và thiết bị ngoại vi",
    "Điều khiển việc truyền dữ liệu giữa bộ nhớ Cache và bộ nhớ ROM",
    "Điều khiển việc truyền dữ liệu giữa bộ nhớ Cache và bộ nhớ RAM",
    "Điều khiển việc truyền dữ liệu giữa bộ nhớ Cache và khối ALU"
  ],
  answer: "Điều khiển việc truyền dữ liệu giữa bộ nhớ Cache và bộ nhớ RAM"
},
{
  question: "Một mảng nhớ trong bộ vi xử lý 8086/8088 do các thanh ghi mảng quản lý có kích thước bằng bao nhiêu?",
  options: [
    "16 KByte",
    "32 KByte",
    "64 Kbyte",
    "128 KByte"
  ],
  answer: "64 Kbyte"
},
{
  question: "Bộ điều khiển DMA (DMAC) tham gia quản lý bộ nhớ trong trường hợp nào?",
  options: [
    "Trong việc truyền số liệu giữa bộ điều khiển ổ đĩa và bộ nhớ",
    "Trong việc truyền số liệu giữa khối ALU và bộ nhớ",
    "Trong việc truyền số liệu giữa các thanh ghi và bộ nhớ",
    "Xác lập các tham số của BIOS"
  ],
  answer: "Trong việc truyền số liệu giữa bộ điều khiển ổ đĩa và bộ nhớ"
},
{
  question: "Trong các khối sau, khối nào không thuộc hệ thống hỗ trợ vào ra?",
  options: [
    "Bộ điều khiển ổ đĩa",
    "Bộ phối ghép màn hình",
    "Bộ điều khiển bàn phím",
    "Các thanh ghi đa năng"
  ],
  answer: "Các thanh ghi đa năng"
},
{
  question: "Trong các thiết bị sau, thiết bị nào không phải là thiết bị ngoại vi?",
  options: [
    "Màn hình",
    "RAM",
    "Đĩa cứng",
    "Bàn phím"
  ],
  answer: "RAM"
},
{
  question: "Trong các thành phần sau, thành phần nào thuộc hệ thống hỗ trợ phối ghép vào ra?",
  options: [
    "Cache",
    "Cáp nguồn ổ cứng",
    "Giao tiếp cổng USB",
    "Các thanh ghi đa năng"
  ],
  answer: "Giao tiếp cổng USB"
},
{
  question: "Chức năng nào sau đây không phải là chức năng của hệ thống hỗ trợ vào ra?",
  options: [
    "Phối ghép các thiết bị ngoại vi với các thành phần khác của máy tính",
    "Đảm bảo việc chuyển dữ liệu giữa máy tính và thiết bị ngoại vi",
    "Điều khiển cấp phát bộ vi xử lý cho các thao tác trong môi trường đa nhiệm",
    "Hỗ trợ việc truyền dữ liệu giữa các thiết bị ngoại vi và bộ nhớ"
  ],
  answer: "Điều khiển cấp phát bộ vi xử lý cho các thao tác trong môi trường đa nhiệm"
},
{
  question: "Chức năng của hệ thống hỗ trợ vào ra là:",
  options: [
    "Chuyển đổi dữ liệu từ môi trường bên ngoài thành dạng số và đưa vào máy tính",
    "Đảm bảo việc trao đổi dữ liệu giữa máy tính và các thiết bị ngoại vi",
    "Tiếp nhận các ngắt từ các thiết bị vào ra dữ liệu",
    "Hỗ trợ thiết lập việc truyền dữ liệu giữa các máy tính"
  ],
  answer: "Đảm bảo việc trao đổi dữ liệu giữa máy tính và các thiết bị ngoại vi"
},
{
  question: "Đặc điểm của thiết bị lưu trữ ngoài là:",
  options: [
    "Tốc độ truy cập nhanh",
    "Dung lượng nhỏ",
    "Không mất dữ liệu khi mất nguồn",
    "Giá thành cao"
  ],
  answer: "Không mất dữ liệu khi mất nguồn"
},
{
  question: "Nguyên tắc lưu trữ của thiết bị lưu trữ ngoài thường là:",
  options: [
    "Bộ nhớ bán dẫn",
    "Bộ nhớ từ, quang hoặc quang từ",
    "Hiện tượng từ trễ",
    "Hiệu ứng dòng Fucô"
  ],
  answer: "Bộ nhớ từ, quang hoặc quang từ"
},
{
  question: "Nguyên lý của việc ghi dữ liệu trên đĩa mềm là gì?",
  options: [
    "Các bit 1 và 0 tương ứng với các trạng thái nhiễm từ khác nhau của vật liệu từ",
    "Các bit 1 và 0 tương ứng với các giá trị điện áp khác nhau trên vật liệu từ",
    "Các bit 1 và 0 tương ứng với các momen lực từ khác nhau tác động lên đầu đọc",
    "Các bit 1 và 0 tương ứng với tốc độ di chuyển khác nhau của các điện tử trong vật liệu từ"
  ],
  answer: "Các bit 1 và 0 tương ứng với các trạng thái nhiễm từ khác nhau của vật liệu từ"
},
{
  question: "Khi nói đĩa mềm loại 3.5 inches thì giá trị 3.5 inches là:",
  options: [
    "Diện tích của phần đĩa từ trong đĩa mềm",
    "Đường kính của phần đĩa từ trong đĩa mềm",
    "Chu vi của đĩa mềm",
    "Chiều rộng của đĩa mềm"
  ],
  answer: "Đường kính của phần đĩa từ trong đĩa mềm"
},
{
  question: "Trong các giá trị sau, giá trị nào có thể là kích thước của đĩa mềm?",
  options: [
    "2.25 inches",
    "2.75 inches",
    "3.5 inches",
    "4.25 inches"
  ],
  answer: "3.5 inches"
},
{
  question: "Trong các giá trị sau, giá trị nào có thể là kích thước của đĩa mềm?",
  options: [
    "3.25 inches",
    "3.75 inches",
    "4.5 inches",
    "5.25 inches"
  ],
  answer: "5.25 inches"
},
{
  question: "Mỗi sector trong đĩa mềm chứa bao nhiêu byte dữ liệu?",
  options: [
    "128",
    "256",
    "512",
    "1024"
  ],
  answer: "512"
},
{
  question: "Trong các giá trị sau, giá trị nào có thể là kích thước của đĩa mềm?",
  options: [
    "5.25 inches",
    "5.75 inches",
    "6.5 inches",
    "7.25 inches"
  ],
  answer: "5.25 inches"
},
{
  question: "Trong các giá trị sau, giá trị nào có thể là kích thước của đĩa mềm?",
  options: [
    "4.25 inches",
    "4.75 inches",
    "5.25 inches",
    "6.25 inches"
  ],
  answer: "5.25 inches"
},
{
  question: "Một đĩa mềm một mặt có 40 track, mỗi track chia thành 8 sector thì dung lượng đĩa là bao nhiêu?",
  options: [
    "80 KB",
    "160 KB",
    "320 KB",
    "640 KB"
  ],
  answer: "160 KB"
},
{
  question: "Một đĩa mềm một mặt có 40 track, mỗi track chia thành 9 sector thì dung lượng đĩa là bao nhiêu?",
  options: [
    "180 KB",
    "270 KB",
    "360 KB",
    "90 KB"
  ],
  answer: "180 KB"
},
{
  question: "Một đĩa mềm hai mặt có 40 track, mỗi track chia thành 8 sector thì dung lượng đĩa là bao nhiêu?",
  options: [
    "80 KB",
    "160 KB",
    "320 KB",
    "640 KB"
  ],
  answer: "320 KB"
},
{
  question: "Kí hiệu HD trong đĩa mềm loại 3.5” DS/HD có ý nghĩa là gì?",
  options: [
    "Kích thước nhỏ",
    "Kích thước lớn",
    "Mật độ cao",
    "Mật độ trung bình"
  ],
  answer: "Mật độ cao"
},
{
  question: "Mỗi Sector trong đĩa mềm chứa dữ liệu với dung lượng bằng bao nhiêu?",
  options: [
    "128 Byte",
    "256 Byte",
    "512 Byte",
    "1024 Byte"
  ],
  answer: "512 Byte"
},
{
  question: "Kí hiệu DD trong đĩa mềm loại 5.25” DS/DD có ý nghĩa là gì?",
  options: [
    "Đĩa mềm được ghi theo hai mặt",
    "Kích thước lớn",
    "Mật độ gấp đôi",
    "Mật độ trung bình"
  ],
  answer: "Mật độ gấp đôi"
},
{
  question: "Kí hiệu DS trong đĩa mềm loại 3.5” DS/HD có ý nghĩa là gì?",
  options: [
    "Đĩa mềm được ghi theo hai mặt",
    "Kích thước lớn",
    "Mật độ cao",
    "Mật độ trung bình"
  ],
  answer: "Đĩa mềm được ghi theo hai mặt"
},
{
  question: "Tốc độ quay của động cơ điều khiển ổ đĩa mềm thường bằng:",
  options: [
    "250 vòng/phút",
    "300 vòng/phút",
    "350 vòng/phút",
    "400 vòng/phút"
  ],
  answer: "300 vòng/phút"
},
{
  question: "Tốc độ quay của động cơ điều khiển ổ đĩa mềm thường bằng:",
  options: [
    "280 vòng/phút",
    "320 vòng/phút",
    "360 vòng/phút",
    "400 vòng/phút"
  ],
  answer: "360 vòng/phút"
},
{
  question: "Khi đọc dữ liệu trên đĩa mềm, yếu tố nào tạo nên tín hiệu dữ liệu?",
  options: [
    "Sự biến thiên của từ thông của phần tử lưu trữ tạo thành điện thế cảm ứng ở hai đầu ra của cuộn dây",
    "Sự biến thiên của lực từ tác động lên đầu đọc tạo nên điện thế cảm ứng ở hai đầu ra của cuộn dây",
    "Sự biến thiên của điện trường trên đầu đọc tạo thành dòng điện cảm ứng ở hai đầu ra của cuộn dây",
    "Sự biến thiên của lực tác động từ động cơ bước tạo nên sức điện động cảm ứng ở hai đầu ra của cuộn dây"
  ],
  answer: "Sự biến thiên của từ thông của phần tử lưu trữ tạo thành điện thế cảm ứng ở hai đầu ra của cuộn dây"
},
{
  question: "Khi ghi dữ liệu lên đĩa mềm, yếu tố nào tạo nên các mức 0 và 1?",
  options: [
    "Cuộn dây sẽ phát ra điện trường làm biến thiên từ thông của phần tử lưu trữ tạo thành các trạng thái tương ứng với các mức dữ liệu 0 và 1",
    "Cuộn dây sẽ phát ra từ trường qua khe để từ hóa bột Ôxit sắt trên mặt đĩa tạo nên các trạng thái tương ứng với các mức dữ liệu 0 và 1",
    "Cuộn dây sẽ phát ra điện trường trên đầu đọc tạo thành dòng điện cảm ứng tạo nên các trạng thái tương ứng với các mức dữ liệu 0 và 1",
    "Cuộn dây sẽ phát ra từ trường gây ra lực từ tác động lên phần tử lưu trữ tạo nên các trạng thái tương ứng với các mức dữ liệu 0 và 1"
  ],
  answer: "Cuộn dây sẽ phát ra từ trường qua khe để từ hóa bột Ôxit sắt trên mặt đĩa tạo nên các trạng thái tương ứng với các mức dữ liệu 0 và 1"
},
{
  question: "Mạch điều khiển ổ đĩa mềm thường được nối với?",
  options: [
    "Cổng truyền thông nối tiếp trên bản mạch chính",
    "Cổng truyền thông song song trên bản mạch chính",
    "Một khe cắm riêng trên bản mạch chính",
    "Một khe cắm PCI trên bản mạch chính"
  ],
  answer: "Một khe cắm riêng trên bản mạch chính"
},
{
  question: "Tốc độ quay của ổ đĩa cứng có thể lấy giá trị nào trong số các giá trị sau đây?",
  options: [
    "500 vòng/phút",
    "7200 vòng/phút",
    "54000 vòng/phút",
    "72000 vòng/phút"
  ],
  answer: "7200 vòng/phút"
},
{
  question: "Nguyên lý của việc ghi dữ liệu trên đĩa cứng là gì?",
  options: [
    "Các bit 1 và 0 tương ứng với các trạng thái nhiễm từ khác nhau của vật liệu từ",
    "Các bit 1 và 0 tương ứng với tốc độ di chuyển khác nhau của các điện tử trong vật liệu từ",
    "Các bit 1 và 0 tương ứng với các giá trị điện áp khác nhau trên vật liệu từ",
    "Các bit 1 và 0 tương ứng với các momen lực từ khác nhau tác động lên đầu đọc"
  ],
  answer: "Các bit 1 và 0 tương ứng với các trạng thái nhiễm từ khác nhau của vật liệu từ"
},
{
  question: "Với đĩa từ, đặc điểm nào trong các đặc điểm sau đây thuộc kỹ thuật ghi mật độ không đều?",
  options: [
    "Dung lượng của đĩa lớn",
    "Dung lượng của đĩa nhỏ",
    "Tất cả các rãnh đều có cùng số cung",
    "Các rãnh khác nhau có số cung khác nhau"
  ],
  answer: "Tất cả các rãnh đều có cùng số cung"
},
{
  question: "Với đĩa từ, đặc điểm nào trong các đặc điểm sau đây thuộc kỹ thuật ghi mật độ đều?",
  options: [
    "Dung lượng của đĩa lớn",
    "Dung lượng của đĩa nhỏ",
    "Tất cả các rãnh đều có cùng số cung",
    "Các rãnh ở xa trục quay sẽ có số cung lớn hơn"
  ],
  answer: "Các rãnh ở xa trục quay sẽ có số cung lớn hơn"
},
{
  question: "Mỗi Sector trong đĩa cứng chứa dữ liệu với dung lượng bằng bao nhiêu?",
  options: [
    "128 Byte",
    "256 Byte",
    "512 Byte",
    "1024 Byte"
  ],
  answer: "512 Byte"
},
{
  question: "Tốc độ quay của ổ đĩa cứng có thể lấy giá trị nào trong số các giá trị sau đây?",
  options: ["500 vòng/phút", "5400 vòng/phút", "54000 vòng/phút", "72000 vòng/phút"],
  answer: "5400 vòng/phút"
},
{
  question: "Trong các thiết bị lưu trữ dạng từ, giá trị 1 logic và 0 logic khác được phân biệt như thế nào?",
  options: [
    "Giá trị 1 tương ứng với vật liệu nhựa còn giá trị 0 tương ứng với vật liệu từ tính",
    "Giá trị 1 tương ứng với trạng thái có từ tính còn giá trị 0 tương ứng với trạng thái không có từ tính",
    "Giá trị 1 tương ứng với vùng có từ tính mạnh còn giá trị 0 tương ứng với vùng có từ tính yếu",
    "Giá trị 1 tương ứng trạng thái từ tính với các cực xác định theo một hướng còn giá trị 0 tương ứng với trạng thái từ tính với các cực xác định theo hướng ngược lại"
  ],
  answer: "Giá trị 1 tương ứng trạng thái từ tính với các cực xác định theo một hướng còn giá trị 0 tương ứng với trạng thái từ tính với các cực xác định theo hướng ngược lại"
},
{
  question: "Các loại đĩa từ (đĩa cứng và đĩa mềm) trước khi được sử dụng để lưu trữ dữ liệu nó cần phải được:",
  options: ["Từ hóa", "Định dạng", "Khử từ", "Tạo sector"],
  answer: "Định dạng"
},
{
  question: "Quá trình đọc thông tin trên đĩa CDROM dựa trên hiện tượng gì?",
  options: [
    "Sự phản chiếu của các tia laser năng lượng thấp từ lớp lưu trữ dữ liệu",
    "Sự phản chiếu của các tia laser năng lượng cao từ lớp lưu trữ dữ liệu",
    "Sự khác nhau về giá trị dòng quang điện khi ánh sáng phản xạ từ lớp lưu trữ dữ liệu",
    "Sự khác nhau về giá trị dòng quang điện khi ánh sáng phản xạ từ lớp bề mặt đĩa"
  ],
  answer: "Sự phản chiếu của các tia laser năng lượng thấp từ lớp lưu trữ dữ liệu"
},
{
  question: "Việc phân biệt các vị trí được khắc trên đĩa CDROM được thực hiện như thế nào?",
  options: [
    "Đầu đọc có thiết bị dò tìm các vị trí bị khắc hay không bị khắc trên đĩa",
    "Bộ phận tiếp nhận ánh sáng của thiết bị đọc sẽ nhận biết được những điểm tại đó tia laser bị phản xạ mạnh hay biến mất",
    "Đầu đọc có thiết bị cảm nhận sự thay đổi dòng quang điện do tia laser tạo ra",
    "Bộ phận tiếp nhận ánh sáng của thiết bị đọc có khả năng phân biệt các vị trí có vết khắc"
  ],
  answer: "Bộ phận tiếp nhận ánh sáng của thiết bị đọc sẽ nhận biết được những điểm tại đó tia laser bị phản xạ mạnh hay biến mất"
},
{
  question: "Khi bộ nhận biết ánh sáng của thiết bị đọc CDROM nhận biết các điểm có vết khắc trên đĩa, các tia phản xạ mạnh tương ứng với:",
  options: ["Điểm khắc lỗ", "Điểm không khắc lỗ", "Điểm không ghi dữ liệu", "Điểm vành ngoài đĩa"],
  answer: "Điểm không khắc lỗ"
},
{
  question: "Dữ liệu trên CDROM được sắp xếp dạng:",
  options: [
    "Theo từng bit",
    "Theo từng byte",
    "Theo từng khối",
    "Theo từng từ 16 bit"
  ],
  answer: "Theo từng khối"
},
{
  question: "Tốc độ chuẩn 1x của đĩa CDROM tương ứng với:",
  options: [
    "15 KB/s",
    "150 KB/s",
    "1.5 MB/s",
    "15 MB/s"
  ],
  answer: "150 KB/s"
},
{
  question: "Rãnh trên đĩa CDROM được khắc như thế nào:",
  options: [
    "Theo một đường xoắn ốc",
    "Theo các đường tròn đồng tâm",
    "Theo các hình vuông cùng trọng tâm",
    "Không theo hình nào trong các hình trên"
  ],
  answer: "Theo một đường xoắn ốc"
},
{
  question: "Dữ liệu ghi trên rãnh trong đĩa CDROM được bắt đầu từ đâu?",
  options: [
    "Từ ngoài vào trong",
    "Từ trong ra ngoài",
    "Từ giữa",
    "Từ một vị trí ngẫu nhiên"
  ],
  answer: "Từ ngoài vào trong"
},
{
  question: "Kích thước của mỗi khối dữ liệu trên đĩa CD là bao nhiêu?",
  options: [
    "2352 byte",
    "2212 byte",
    "2132 byte",
    "2048 byte"
  ],
  answer: "2048 byte"
},
{
  question: "Đặc điểm của đĩa CD-R là gì?",
  options: [
    "Cho phép ghi dữ liệu nhiều lần",
    "Không cho phép xóa dữ liệu",
    "Cho phép ghi dữ liệu một lần",
    "Dung lượng nhỏ hơn đĩa CDROM"
  ],
  answer: "Cho phép ghi dữ liệu một lần"
},
{
  question: "Đặc điểm của đĩa CD-R là gì?",
  options: [
    "Cho phép ghi dữ liệu nhiều lần",
    "Không cho phép xóa dữ liệu",
    "Dữ liệu không thể bị xóa",
    "Dung lượng nhỏ hơn đĩa CDROM"
  ],
  answer:  "Dữ liệu không thể bị xóa"
},
{
  question: "Đặc điểm của đĩa CD-RW là gì?",
  options: [
    "Cho phép ghi và xóa dữ liệu nhiều lần",
    "Dung lượng lớn gấp đôi đĩa CD-R",
    "Cho phép ghi và xóa dữ liệu đồng thời",
    "Dữ liệu không thể bị xóa"
  ],
  answer: "Cho phép ghi và xóa dữ liệu nhiều lần"
},
{
  question: "Đặc điểm của đĩa DVD là gì?",
  options: [
    "Cho phép ghi dữ liệu trên hai lớp",
    "Dung lượng nhỏ hơn đĩa CDROM",
    "Cho phép ghi và xóa dữ liệu một lần đồng thời",
    "Dữ liệu không thể bị xóa"
  ],
  answer: "Cho phép ghi dữ liệu trên hai lớp"
},
{
  question: "Tốc độ chuẩn 1x của đĩa DVD tương ứng với:",
  options: [
    "13 KB/s",
    "130 KB/s",
    "1.3 MB/s",
    "13 MB/s"
  ],
  answer: "1.3 MB/s"
},
{
  question: "Dung lượng ghi tối đa trên một mặt đĩa DVD-R và đĩa DVD-RW là:",
  options: [
    "2.7 GB",
    "4.7 GB",
    "6.7 GB",
    "8.7 GB"
  ],
  answer: "4.7 GB"
},
{
  question: "Ưu điểm của thiết bị lưu trữ ngoài là:",
  options: [
    "Tốc độ truy cập nhanh",
    "Dung lượng lớn",
    "Kích thước nhỏ",
    "Dễ chế tạo hơn"
  ],
  answer: "Dung lượng lớn"
},
{
  question: "Một ưu điểm của thiết bị lưu trữ ngoài so với bộ nhớ trong của máy tính là:",
  options: [
    "Thời gian truy cập nhỏ",
    "Không bị mất dữ liệu khi mất nguồn",
    "Tiêu thụ nguồn ít",
    "Cấu tạo đơn giản"
  ],
  answer: "Không bị mất dữ liệu khi mất nguồn"
},
{
  question: "Cấu trúc SDU của việc truyền dữ liệu từ bàn phím vào máy tính có bao nhiêu bit dữ liệu?",
  options: [
    "6 bit",
    "7 bit",
    "8 bit",
    "9 bit"
  ],
  answer: "8 bit"
},
{
  question: "Trong cấu trúc SDU của việc truyền dữ liệu từ bàn phím vào máy tính, bit Stop có đặc điểm gì?",
  options: [
    "Luôn bằng 0",
    "Luôn bằng 1",
    "Chuyển từ 0 sang 1",
    "Chuyển từ 1 sang 0"
  ],
  answer: "Luôn bằng 1"
},
{
  question: "Trong cấu trúc SDU của việc truyền dữ liệu từ bàn phím vào máy tính, bit Start có đặc điểm gì?",
  options: [
    "Luôn bằng 0",
    "Luôn bằng 1",
    "Chuyển từ 0 sang 1",
    "Chuyển từ 1 sang 0"
  ],
  answer: "Luôn bằng 0"
},
{
  question: "Một cấu trúc SDU của việc truyền dữ liệu từ bàn phím vào máy tính có tổng số bao nhiêu bit?",
  options: [
    "6 bit",
    "8 bit",
    "9 bit",
    "11 bit"
  ],
  answer: "11 bit"
},
{
  question: "Mã quét bàn phím có độ dài bao nhiêu bit?",
  options: [
    "6 bit",
    "8 bit",
    "16 bit",
    "24 bit"
  ],
  answer: "8 bit"
},
{
  question: "Việc xử lý phân biệt một phím được nhấn nhiều lần hay một lần nhưng được giữ trong một khoảng thời gian do:",
  options: [
    "Phần cứng mạch ghép nối bàn phím của máy tính thực hiện",
    "Phần cứng và phần mềm xử lý bàn phím thực hiện",
    "Phần cứng khối xử lý bàn phím thực hiện",
    "Phần mềm cài trong mạch ghép nối bàn phím của máy tính thực hiện"
  ],
  answer: "Phần cứng và phần mềm xử lý bàn phím thực hiện"
},
{
  question: "Nguồn nuôi cho bàn phím được lấy từ đâu?",
  options: [
    "Từ một pin nhỏ bên trong bàn phím",
    "Trực tiếp từ bộ nguồn",
    "Nhờ bộ biến đổi tín hiệu thu từ máy tính thành nguồn cấp",
    "Từ máy tính"
  ],
  answer: "Từ máy tính"
},
{
  question: "Việc xử lý khử nhiễu rung cơ khí khi một phím của bàn phím máy tính được nhấn do:",
  options: [
    "Phần cứng và phần mềm xử lý bàn phím thực hiện",
    "Phần cứng khối xử lý bàn phím và mạch ghép nối bàn phím của máy tính thực hiện",
    "Phần mềm cài trong khối xử lý bàn phím thực hiện",
    "Phần mềm cài trong mạch ghép nối bàn phím của máy tính thực hiện"
  ],
  answer: "Phần cứng và phần mềm xử lý bàn phím thực hiện"
},
{
  question: "Đầu cắm bàn phím dạng PS/2 có mấy chân?",
  options: [
    "5",
    "6",
    "7",
    "8"
  ],
  answer: "6"
},
{
  question: "Giao tiếp bàn phím dạng PS/2 có mấy đường dữ liệu?",
  options: [
    "1",
    "2",
    "3",
    "4"
  ],
  answer: "2"
},
{
  question: "Việc truyền dữ liệu từ bàn phím tới máy tính thường theo nguyên tắc nào?",
  options: [
    "Song song",
    "Nối tiếp",
    "Song công",
    "Bán song công"
  ],
  answer: "Nối tiếp"
},
{
  question: "Để nhận ra phím nào được nhấn, chip xử lý bàn phím thực hiện như thế nào?",
  options: [
    "Liên tục kiểm tra trạng thái của ma trận quét và ghi một mã tương ứng vào bộ đệm bên trong bàn phím rồi truyền nối tiếp tới mạch ghép nối bàn phím trong PC",
    "Liên tục kiểm tra trạng thái của ma trận quét và truyền theo phương thức nối tiếp tới mạch ghép nối bàn phím trong PC",
    "Liên tục kiểm tra trạng thái từng phím và truyền theo phương thức nối tiếp tới mạch ghép nối bàn phím trong PC",
    "Liên tục kiểm tra trạng thái của từng phím và ghi một mã tương ứng vào bộ đệm bên trong bàn phím rồi truyền nối tiếp tới bộ vi xử lý trong PC"
  ],
  answer: "Liên tục kiểm tra trạng thái của ma trận quét và ghi một mã tương ứng vào bộ đệm bên trong bàn phím rồi truyền nối tiếp tới mạch ghép nối bàn phím trong PC"
},
{
  question: "Chức năng của hai đĩa gắn với các thanh đặt vuông góc bên trong chuột máy tính là gì?",
  options: [
    "Có các lỗ nhỏ liên tục đóng ngắt hai chùm sáng tới các sensor nhạy sáng để tạo các xung điện",
    "Biến chuyển động quay thành moment từ của nam châm điện, nhờ đó tạo ra các xung điện",
    "Biến chuyển động quay thành moment từ của nam châm điện, nhờ đó tạo ra các sức điện động cảm ứng",
    "Có các lỗ nhỏ liên tục đóng ngắt chuyển mạch cấp điện cho một nam châm điện, nhờ đó tạo ra các xung điện"
  ],
  answer: "Có các lỗ nhỏ liên tục đóng ngắt hai chùm sáng tới các sensor nhạy sáng để tạo các xung điện"
},
{
  question: "Các xung điện tạo ra trong mạch điện chuột nhờ:",
  options: [
    "Chuyển động quay của hai đĩa được biến thành moment từ của nam châm điện",
    "Các lỗ nhỏ trên hai đĩa quay liên tục đóng và ngắt hai chùm sáng tới các sensor nhạy sáng",
    "Chuyển động quay của hai đĩa được biến thành các sức điện động cảm ứng",
    "Các lỗ nhỏ liên tục đóng ngắt chuyển mạch cấp điện cho một nam châm điện"
  ],
  answer: "Các lỗ nhỏ trên hai đĩa quay liên tục đóng và ngắt hai chùm sáng tới các sensor nhạy sáng"
},
{
  question: "Số xung điện tạo ra trong chuột nhờ các lỗ nhỏ trên hai đĩa quay đóng ngắt các sensor nhạy sáng tỉ lệ với:",
  options: [
    "Giá trị nguồn cấp cho chuột",
    "Số lượng lỗ nhỏ có trên hai đĩa quay của chuột",
    "Kích thước của viên bi trung tâm của chuột",
    "Lượng chuyển động của chuột theo các hướng X và Y"
  ],
  answer: "Lượng chuyển động của chuột theo các hướng X và Y"
},
{
  question: "Nguồn nuôi cho chuột được lấy từ đâu?",
  options: [
    "Từ một pin nhỏ bên trong chuột",
    "Từ máy tính",
    "Trực tiếp từ bộ nguồn",
    "Nhờ bộ biến đổi tiến hiệu thu từ máy tính thành nguồn cấp"
  ],
  answer: "Từ máy tính"
},
{
  question: "Các hàm 09H và 0AH trong ngắt 33H có chức năng gì?",
  options: [
    "Xác lập độ dài khối dữ liệu truyền từ chuột",
    "Định nghĩa loại và dạng con trỏ chuột",
    "Vô hiệu hóa và kích hoạt chuột",
    "Thay đổi chức năng các phím bấm trên chuột"
  ],
  answer: "Vô hiệu hóa và kích hoạt chuột"
},
{
  question: "Việc truyền dữ liệu từ chuột tới máy tính thường theo nguyên tắc nào?",
  options: [
    "Nối tiếp",
    "Song song",
    "Song công",
    "Bán song công"
  ],
  answer: "Nối tiếp"
},
{
  question: "Hai thanh nhỏ vuông góc với nhau bên trong chuột máy tính có chức năng gì?",
  options: [
    "Biến chuyển động của chuột theo hai hướng X và Y thành các xung điện đưa về khối xử lý chuột của máy tính",
    "Biến chuyển động của chuột theo hai hướng X và Y thành chuyển động quay của hai đĩa tương ứng gắn với nó",
    "Biến chuyển động quay của các đĩa tương ứng gắn với nó thành các xung điện",
    "Biến chuyển động quay của con lăn của chuột thành các xung điện"
  ],
  answer: "Biến chuyển động của chuột theo hai hướng X và Y thành chuyển động quay của hai đĩa tương ứng gắn với nó"
},
{
  question: "Các thiết bị sau vừa có thể coi là thiết bị ngoại vi, vừa là thiết bị nhớ ngoài, loại trừ:",
  options: [
    "Thẻ nhớ",
    "Ổ đĩa cứng",
    "Đĩa mềm",
    "Máy in"
  ],
  answer: "Máy in"
},
{
  question: "Chức năng nào sau đây không phải là của ổ đĩa cứng?",
  options: [
    "Lưu trữ dài hạn các tập tin",
    "Thiết lập một cấp bộ nhớ bên dưới bộ nhớ trong để làm bộ nhớ ảo",
    "Chứa dữ liệu các chương trình ứng dụng của người dùng",
    "Chứa các tham số hệ thống"
  ],
  answer: "Chứa các tham số hệ thống"
},
{
  question: "Phương pháp DMA cho phép:",
  options: [
    "Trao đổi dữ liệu trực tiếp giữa ngoại vi và bộ nhớ trong",
    "Trao đổi dữ liệu trực tiếp giữa bộ nhớ trong và bộ nhớ Cache",
    "Trao đổi dữ liệu trực tiếp giữa bộ nhớ ngoài và bộ nhớ Cache",
    "Trao đổi dữ liệu trực tiếp giữa ngoại vi và bộ nhớ ngoài"
  ],
  answer: "Trao đổi dữ liệu trực tiếp giữa ngoại vi và bộ nhớ trong"
},
{
  question: "Trong các thiết bị sau, thiết bị nào là thiết bị ngoại vi?",
  options: [
    "RAM",
    "Cache",
    "Máy in",
    "Mainboard"
  ],
  answer: "Máy in"
},
{
  question: "Bộ điều khiển DMA (DMAC) tham gia điều khiển quá trình nào trong số các quá trình sau?",
  options: [
    "Trong việc truyền số liệu giữa khối ALU và bộ nhớ",
    "Trong việc truyền số liệu giữa bộ điều khiển ổ đĩa và bộ nhớ",
    "Trong việc truyền số liệu giữa các thanh ghi và bộ nhớ",
    "Trong quá trình xác lập các tham số hệ thống trong BIOS"
  ],
  answer: "Trong việc truyền số liệu giữa bộ điều khiển ổ đĩa và bộ nhớ"
},
{
  question: "Giao tiếp RS-232 là:",
  options: [
    "Một giao tiếp song song",
    "Một giao tiếp nối tiếp",
    "Một giao tiếp máy in",
    "Một giao tiếp modem"
  ],
  answer: "Một giao tiếp nối tiếp"
},
{
  question: "Chức năng của bộ vi xử lý trong máy tính là gì?",
  options: [
    "Điều khiển hoạt động của các thiết bị ngoại vi",
    "Đọc dữ liệu từ bộ nhớ, xử lý theo từng câu lệnh và ghi kết quả vào bộ nhớ hay thiết bị ngoại vi",
    "Đọc dữ liệu từ các thiết bị ngoại vi và ghi vào bộ nhớ",
    "Đọc dữ liệu từ các thiết bị ngoại vi và ghi vào bộ nhớ"
  ],
  answer: "Đọc dữ liệu từ bộ nhớ, xử lý theo từng câu lệnh và ghi kết quả vào bộ nhớ hay thiết bị ngoại vi"
},
{
  question: "Các bộ vi xử lý 80x86 được cấu thành từ các khối cơ bản nào?",
  options: [
    "EU, BIU, AU và CU",
    "EU, BIU, AU và IU",
    "ALU, AU, IU và CU",
    "ALU, IU, CU và EU"
  ],
  answer: "EU, BIU, AU và CU"
},
{
  question: "Thành phần nào sau đây không phải là một bộ phận của bộ vi xử lý?",
  options: [
    "ALU",
    "CU",
    "Các thanh ghi",
    "Bus hệ thống"
  ],
  answer: "Bus hệ thống"
},
{
  question: "Khối EU trong bộ vi xử lý gồm các thành phần nào?",
  options: [
    "ALU, CU và các thanh ghi",
    "ALU, CU và hàng nhận lệnh",
    "ALU và hàng nhận lệnh",
    "ALU và CU"
  ],
  answer: "ALU, CU và các thanh ghi"
},
{
  question: "Chức năng của khối EU trong bộ vi xử lý là gì?",
  options: [
    "Nhận lệnh",
    "Thực hiện lệnh",
    "Giải mã lệnh",
    "Biên dịch lệnh"
  ],
  answer: "Thực hiện lệnh"
},
{
  question: "Bộ vi xử lý 32 bit có:",
  options: [
    "32 thanh ghi",
    "32 thiết bị vào ra",
    "32 Megabyte RAM",
    "Các thanh ghi và Bus 32 bit"
  ],
  answer: "Các thanh ghi và Bus 32 bit"
},
{
  question: "Các bộ vi xử lý kiểu CISC có đặc điểm là:",
  options: [
    "Có số lượng các lệnh ít hơn so với các bộ vi xử lý kiểu RISC",
    "Sử dụng nhiều RAM hơn so với các bộ vi xử lý kiểu RISC",
    "Có tốc độ đồng hồ trung bình",
    "Sử dụng các lệnh có kích thước khác nhau"
  ],
  answer: "Sử dụng các lệnh có kích thước khác nhau"
},
{
  question: "Các bộ vi xử lý kiểu RISC điển hình có đặc điểm là:",
  options: [
    "Có các bộ nhớ Cache với dung lượng lớn hơn so với các bộ vi xử lý kiểu CISC",
    "Có ít thanh ghi hơn so với các bộ vi xử lý kiểu CISC",
    "Kém tin cậy hơn so với các bộ vi xử lý kiểu CISC",
    "Thường thực hiện mỗi lệnh trong một xung nhịp Clock"
  ],
  answer: "Thường thực hiện mỗi lệnh trong một xung nhịp Clock"
},
{
  question: "Khối địa chỉ trong bộ xử lý 80286 được viết tắt là gì?",
  options: [
    "ALU",
    "AU",
    "EU",
    "IU"
  ],
  answer: "AU"
},
{
  question: "Khối thực hiện lệnh trong bộ xử lý 80286 được viết tắt là gì?",
  options: [
    "ALU",
    "AU",
    "EU",
    "IU"
  ],
  answer: "EU"
},
{
  question: "Đơn vị lệnh trong bộ xử lý 80286 được viết tắt là gì?",
  options: [
    "ALU",
    "AU",
    "EU",
    "IU"
  ],
  answer: "IU"
},
{
  question: "Khối tính toán số học-logic trong bộ xử lý 80286 được viết tắt là gì?",
  options: [
    "ALU",
    "AU",
    "EU",
    "IU"
  ],
  answer: "ALU"
},
{
  question: "Trong hệ vi xử lý, đối với bộ xử lý 80286 thì kênh địa chỉ có hướng như thế nào?",
  options: [
    "Là kênh đường ra",
    "Là kênh đường vào",
    "Là kênh hai chiều",
    "Không cố định, tuỳ thuộc vào cấu trúc của hệ vi xử lý"
  ],
  answer: "Là kênh đường ra"
},
{
  question: "Bộ vi xử lý 8086 là bộ vi xử lý bao nhiêu bit?",
  options: [
    "8 bit",
    "16 bit",
    "32 bit",
    "64 bit"
  ],
  answer: "16 bit"
},
{
  question: "Trong hệ vi xử lý, đối với bộ xử lý 80286 thì kênh dữ liệu có hướng như thế nào?",
  options: [
    "Là kênh đường ra",
    "Là kênh đường vào",
    "Là kênh hai chiều",
    "Không xác định, tuỳ thuộc vào cấu trúc của hệ vi xử lý"
  ],
  answer: "Là kênh hai chiều"
},
{
  question: "Trong hệ vi xử lý, đối với bộ xử lý 80286 thì kênh điều khiển có hướng như thế nào?",
  options: [
    "Là kênh đường ra",
    "Là kênh đường vào",
    "Là kênh hai chiều",
    "Không xác định, tuỳ thuộc vào từng tín hiệu điều khiển"
  ],
  answer: "Không xác định, tuỳ thuộc vào từng tín hiệu điều khiển"
},
{
  question: "Tất cả các thanh ghi và đường truyền dữ liệu trong 80286 có độ dài bao nhiêu?",
  options: [
    "8 bit",
    "16 bit",
    "24 bit",
    "32 bit"
  ],
  answer: "16 bit"
},
{
  question: "Không gian nhớ thực tối đa mà bộ vi xử lý 80286 có thể quản lý được là bao nhiêu?",
  options: [
    "8 MB",
    "12 MB",
    "16 MB",
    "24 MB"
  ],
  answer: "16 MB"
},
{
  question: "Số đường địa chỉ trong 80286 là bao nhiêu?",
  options: [
    "8",
    "12",
    "16",
    "24"
  ],
  answer: "24"
},
{
  question: "Tần số đồng hồ cực đại của 80286 là bao nhiêu?",
  options: [
    "12 MHz",
    "16 MHz",
    "24 MHz",
    "32 MHz"
  ],
  answer: "16 MHz"
},
{
  question: "Cơ chế xử lý đường ống (pipeline) của bộ vi xử lý 80286 có tác dụng gì?",
  options: [
    "Làm tăng tốc độ truy cập bộ nhớ RAM",
    "Làm tăng tốc độ truy cập bộ nhớ ROM",
    "Cho phép truy cập đồng thời cả ROM và RAM",
    "Cho phép bộ vi xử lý tận dụng thời gian thực hiện lệnh trước để đọc lệnh tiếp theo từ bộ nhớ"
  ],
  answer: "Cho phép bộ vi xử lý tận dụng thời gian thực hiện lệnh trước để đọc lệnh tiếp theo từ bộ nhớ"
},
{
  question: "Chức năng của vi mạch 8284 là:",
  options: [
    "Tạo tín hiệu Reset bộ vi xử lý",
    "Tạo tín hiệu xung nhịp đồng hồ",
    "Tạo tín hiệu điều khiển hệ thống Bus",
    "Tạo tín hiệu điều khiển hệ thống vào ra"
  ],
  answer: "Tạo tín hiệu xung nhịp đồng hồ"
},
{
  question: "Bộ vi xử lý 8086 có bao nhiêu thanh ghi 8 bit?",
  options: [
    "2",
    "4",
    "6",
    "8"
  ],
  answer: "8"
},
{
  question: "Tốc độ truy nhập của các thanh ghi so với bộ nhớ RAM thì:",
  options: [
    "Nhanh hơn",
    "Chậm hơn",
    "Xấp xỉ nhau",
    "Không so sánh được"
  ],
  answer: "Nhanh hơn"
},
{
  question: "Khi muốn đọc lệnh tiếp theo từ ROM thì trước hết nội dung thanh ghi nào cần tăng lên?",
  options: [
    "IP",
    "IP và SI",
    "DI",
    "SP"
  ],
  answer: "IP"
},
{
  question: "Thanh ghi nào trong các thanh ghi sau đây thuộc nhóm thanh ghi con trỏ:",
  options: [
    "DI",
    "CX",
    "DS",
    "BP"
  ],
  answer: "BP"
},
{
  question: "Thanh ghi nào trong các thanh ghi sau đây thuộc nhóm thanh ghi chỉ số:",
  options: [
    "DI",
    "CX",
    "DS",
    "BP"
  ],
  answer: "DI"
},
{
  question: "Thanh ghi nào trong các thanh ghi sau đây thuộc nhóm thanh ghi dữ liệu:",
  options: [
    "DI",
    "DX",
    "DS",
    "BP"
  ],
  answer: "DX"
},
{
  question: "Thanh ghi nào trong các thanh ghi sau đây thuộc nhóm thanh ghi đoạn:",
  options: [
    "DI",
    "CX",
    "DS",
    "BP"
  ],
  answer: "DS"
},
{
  question: "Thanh ghi nào trong các thanh ghi sau đây là thanh ghi đếm?",
  options: [
    "DI",
    "CS",
    "IP",
    "CX"
  ],
  answer: "CX"
},
{
  question: "Thanh ghi nào trong các thanh ghi sau đây là thanh ghi đoạn ngăn xếp?",
  options: [
    "SP",
    "CS",
    "SS",
    "DS"
  ],
  answer: "SS"
},
{
  question: "Thanh ghi nào trong các thanh ghi sau đây là thanh ghi chỉ số nguồn?",
  options: [
    "SI",
    "CS",
    "DI",
    "SP"
  ],
  answer: "SI"
},
{
  question: "Thanh ghi nào trong các thanh ghi sau đây là thanh ghi chỉ số đích:",
  options: [
    "DI",
    "SI",
    "DS",
    "IP"
  ],
  answer: "DI"
},
{
  question: "Thanh ghi nào trong các thanh ghi sau đây là thanh ghi con trỏ ngăn xếp?",
  options: [
    "SI",
    "SP",
    "IP",
    "SS"
  ],
  answer: "SP"
},
{
  question: "Thanh ghi IP cho biết thông tin gì?",
  options: [
    "Địa chỉ bắt đầu của đoạn chương trình hiện hành trong bộ nhớ",
    "Địa chỉ segment của lệnh kế tiếp sẽ được thực hiện",
    "Địa chỉ offset của lệnh kế tiếp sẽ được thực hiện",
    "Địa chỉ dữ liệu dạng chuỗi phục vụ cho chương trình hiện hành"
  ],
  answer: "Địa chỉ offset của lệnh kế tiếp sẽ được thực hiện"
},
{
  question: "Thanh ghi CS cho biết thông tin gì?",
  options: [
    "Địa chỉ bắt đầu của đoạn chương trình hiện hành trong bộ nhớ",
    "Địa chỉ bắt đầu của đoạn dữ liệu phục vụ cho chương trình hiện hành",
    "Địa chỉ bắt đầu của đoạn ngăn xếp trong bộ nhớ",
    "Địa chỉ dữ liệu dạng chuỗi phục vụ cho chương trình hiện hành"
  ],
  answer: "Địa chỉ bắt đầu của đoạn chương trình hiện hành trong bộ nhớ"
},
{
  question: "Thanh ghi DS cho biết thông tin gì?",
  options: [
    "Địa chỉ bắt đầu của đoạn chương trình hiện hành trong bộ nhớ",
    "Địa chỉ bắt đầu của đoạn dữ liệu chứa các biến của chương trình hiện hành",
    "Địa chỉ bắt đầu của đoạn ngăn xếp trong bộ nhớ",
    "Địa chỉ dữ liệu dạng chuỗi phục vụ cho chương trình hiện hành"
  ],
  answer: "Địa chỉ bắt đầu của đoạn dữ liệu chứa các biến của chương trình hiện hành"
},
{
  question: "Thanh ghi SS cho biết thông tin gì?",
  options: [
    "Địa chỉ bắt đầu của đoạn chương trình hiện hành trong bộ nhớ",
    "Địa chỉ bắt đầu của đoạn dữ liệu phục vụ cho chương trình hiện hành",
    "Địa chỉ bắt đầu của đoạn ngăn xếp trong bộ nhớ",
    "Địa chỉ dữ liệu dạng chuỗi phục vụ cho chương trình hiện hành"
  ],
  answer: "Địa chỉ bắt đầu của đoạn ngăn xếp trong bộ nhớ"
},
{
  question: "Thanh ghi ES cho biết thông tin gì?",
  options: [
    "Địa chỉ bắt đầu của đoạn chương trình hiện hành trong bộ nhớ",
    "Địa chỉ kết thúc của đoạn dữ liệu phục vụ cho chương trình hiện hành",
    "Địa chỉ bắt đầu của đoạn ngăn xếp trong bộ nhớ",
    "Địa chỉ đoạn dữ liệu mở rộng phục vụ cho chương trình hiện hành"
  ],
  answer: "Địa chỉ đoạn dữ liệu mở rộng phục vụ cho chương trình hiện hành"
},
{
  question: "Cặp thanh ghi CS:IP cho biết thông tin gì?",
  options: [
    "Địa chỉ bắt đầu của đoạn dữ liệu dành cho chương trình hiện hành trong bộ nhớ",
    "Địa chỉ của lệnh vừa được thực hiện",
    "Địa chỉ của lệnh kế tiếp sẽ được thực hiện",
    "Địa chỉ bắt đầu của đoạn ngăn xếp trong bộ nhớ"
  ],
  answer: "Địa chỉ của lệnh kế tiếp sẽ được thực hiện"
},
{
  question: "Nếu giá trị thanh ghi CS=2D45H và IP=0108H thì lệnh kế tiếp được đặt ở địa chỉ nào trong bộ nhớ?",
  options: ["2D358H", "2D558H", "3D458H", "3D358H"],
  answer: "2D558H"
},
{
  question: "Nếu giá trị thanh ghi CS=3A45H và IP=0206H thì lệnh kế tiếp được đặt ở địa chỉ nào trong bộ nhớ?",
  options: ["2A356H", "3A656H", "3B456H", "3B356H"],
  answer: "3A656H"
},
{
  question: "Nếu giá trị thanh ghi các CS=3A45H, IP=0206H và bộ vi xử lý thực hiện một lệnh dài 2 byte thì giá trị của thanh ghi IP sẽ bằng bao nhiêu?",
  options: ["3A47H", "3A43H", "0208H", "0204H"],
  answer: "0208H"
},
{
  question: "Nếu giá trị thanh ghi các CS=3A45H, IP=0206H và bộ vi xử lý thực hiện một lệnh dài 1 byte thì giá trị của thanh ghi CS sẽ bằng bao nhiêu?",
  options: ["3A46H", "3A45H", "0207H", "0205H"],
  answer: "3A45H"
},
{
  question: "Thanh ghi nào được dùng để lưu trữ địa chỉ cổng vào ra khi bộ vi xử lý thao tác với các thiết bị ngoại vi?",
  options: ["AX", "BX", "CX", "DX"],
  answer: "DX"
},
{
  question: "Thanh ghi nào được dùng để khai báo số lần thực hiện các vòng lặp của ngôn ngữ Assembly?",
  options: ["AX", "BX", "CX", "DX"],
  answer: "CX"
},
{
  question: "Thanh ghi nào được dùng để khai báo số bit được dịch trong các lệnh dịch của ngôn ngữ Assembly?",
  options: ["AH", "AL", "BH", "CL"],
  answer: "CL"
},
{
  question: "Thanh ghi cờ (F) của 80286 có bao nhiêu bit?",
  options: ["8 bit", "12 bit", "16 bit", "24 bit"],
  answer: "16 bit"
},
{
  question: "Nếu lấy tổng của hai toán hạng 8 bit mà kết quả vượt quá 255 thì sẽ tác động đến nội dung của cờ nào trong các cờ sau đây?",
  options: ["CF", "AF", "OF", "ZF"],
  answer: "CF"
},
{
  question: "Nếu kết quả của một thao tác cho ta giá trị bằng 0 thì sẽ tác động đến nội dung của cờ nào trong các cờ sau đây?",
  options: ["CF", "ZF", "SF", "PF"],
  answer: "ZF"
},
{
  question: "Nếu ta đem cộng hai toán hạng (là số không dấu) có giá trị lần lượt là 10001011(B) và 01101101(B) thì sau phép cộng sẽ đặt nội dung của cờ nào trong các cờ sau đây bằng 1?",
  options: ["CF", "SF", "AF", "OF"],
  answer: "AF"
},
{
  question: "Nếu ta đem trừ toán hạng có giá trị 10001001(B) cho toán hạng có giá trị 11011000(B) thì sau phép trừ nội dung của cờ nào trong các cờ sau đây sẽ được đặt lên 1?",
  options: ["OF", "AF", "ZF", "SF"],
  answer: "SF"
},
{
  question: "Kích thước nhỏ nhất của một mã lệnh của bộ vi xử lý 8086 bằng bao nhiêu?",
  options: ["1 byte", "2 byte", "3 byte", "4 byte"],
  answer: "1 byte"
},
{
  question: "Kích thước lớn nhất của một mã lệnh của bộ vi xử lý 8086 bằng bao nhiêu?",
  options: ["5 byte", "10 byte", "15 byte", "20 byte"],
  answer: "15 byte"
},
{
  question: "Đối với bộ vi xử lý 8086, hãy chỉ ra khẳng định đúng trong các khẳng định sau:",
  options: ["Một địa chỉ vật lý có thể tương ứng với nhiều địa chỉ logic", "Một địa chỉ logic có thể tương ứng với nhiều địa chỉ vật lý", "Một địa chỉ logic chỉ tương ứng với một địa chỉ vật lý duy nhất", "Một địa chỉ logic chỉ tương ứng với một địa chỉ vật lý theo một quy luật ánh xạ nhất định."],
  answer: "Một địa chỉ logic chỉ tương ứng với một địa chỉ vật lý duy nhất"
},
{
  question: "Tính địa chỉ vật lý tương ứng với địa chỉ logic 1F36H: 0DA5H",
  options: ["20B05H", "20105H", "20C15H", "40D05H"],
  answer: "20105H"
},
{
  question: "Tính địa chỉ vật lý tương ứng với địa chỉ logic 1D3AH: 0DA1H",
  options: ["1CB01H", "10101H", "1E141H", "20D05H"],
  answer: "1E141H"
},
{
  question: "Tính địa chỉ vật lý tương ứng với địa chỉ logic 1F48H: 0CA5H",
  options: ["20B05H", "20105H", "20C15H", "20125H"],
  answer: "20125H"
},
{
  question: "Tính địa chỉ vật lý tương ứng với địa chỉ logic 1A32H: 02A9H",
  options: ["1A5C9H", "1B1C9H", "20C19H", "20105H"],
  answer: "1A5C9H"
},
{
  question: "Tính địa chỉ vật lý tương ứng với địa chỉ logic 2FA6H: 0DB5H",
  options: ["30B05H", "30815H", "30C15H", "40D05H"],
  answer: "30815H"
},
{
  question: "Đặc điểm của chế độ MIN đối với bộ vi xử lý 8086 là:",
  options: [
      "CPU tự phát ra các tín hiệu điều khiển cho hệ thống Bus", 
      "CPU chỉ phát ra các tín hiệu trạng thái tới chip điều khiển Bus", 
      "CPU đồng thời phát ra tín hiệu điều khiển tới cả Bus và chip điều khiển Bus", 
      "CPU phát ra tín hiệu trạng thái tới chip điều khiển Bus trước, sau đó phát tín hiệu điều khiển các Bus sau"
  ],
  answer: "CPU tự phát ra các tín hiệu điều khiển cho hệ thống Bus"
},
{
  question: "Đặc điểm của chế độ MAX đối với bộ vi xử lý 8086 là:",
  options: [
      "CPU tự phát ra các tín hiệu điều khiển cho các Bus", 
      "CPU chỉ phát ra các tín hiệu trạng thái tới chíp điều khiển Bus", 
      "CPU đồng thời phát ra tín hiệu điều khiển tới cả Bus và chíp điều khiển Bus", 
      "CPU phát ra tín hiệu trạng thái tới chíp điều khiển Bus trước, sau đó phát tín hiệu điều khiển các Bus sau"
  ],
  answer: "CPU chỉ phát ra các tín hiệu trạng thái tới chíp điều khiển Bus"
},
{
  question: "Để truyền dữ liệu 16 bit D15-D0 qua kênh dữ liệu của bộ vi xử lý 8086 thì tổ hợp chân (/BHE, A0) phải được đặt như thế nào?",
  options: [
      "(0,0)", 
      "(0,1)", 
      "(1,0)", 
      "(1,1)"
  ],
  answer: "(0,0)"
},
{
  question: "Để truyền dữ liệu 8 bit D7-D0 qua kênh dữ liệu của bộ vi xử lý 8086 thì tổ hợp chân (/BHE, A0) phải được đặt như thế nào?",
  options: [
      "(0,0)", 
      "(0,1)", 
      "(1,0)", 
      "(1,1)"
  ],
  answer: "(1,0)"
},
{
  question: "Chức năng của chân READY trong bộ vi xử lý 8086 là:",
  options: [
      "Chân đầu ra thông báo cho ngoại vi là bộ vi xử lý đã sẵn sàng", 
      "Chân đầu ra thông báo cho bộ nhớ là bộ vi xử lý đã sẵn sàng", 
      "Chân đầu ra thông báo cho bộ nhớ và ngoại vi là bộ vi xử lý đã sẵn sàng", 
      "Chân đầu vào để bộ nhớ và ngoại vi thông báo cho bộ vi xử lý là chúng đã sẵn sàng làm việc"
  ],
  answer: "Chân đầu vào để bộ nhớ và ngoại vi thông báo cho bộ vi xử lý là chúng đã sẵn sàng làm việc"
},
{
  question: "Hãy chỉ ra phương án đúng trong các phương án sau:",
  options: [
      "Ngắt từ chân INTR có thể che được từ cờ ngắt, còn ngắt từ chân NMI không thể che được từ cờ ngắt", 
      "Ngắt từ chân INTR không thể che được từ cờ ngắt, còn ngắt từ chân NMI có thể che được từ cờ ngắt", 
      "Cả hai ngắt từ chân INTR và NMI đều có thể che được từ cờ ngắt", 
      "Cả hai ngắt từ chân INTR và NMI đều không thể che được từ cờ ngắt"
  ],
  answer: "Ngắt từ chân INTR có thể che được từ cờ ngắt, còn ngắt từ chân NMI không thể che được từ cờ ngắt"
},
{
  question: "Bộ vi xử lý 8086 có thể quản lý không gian địa chỉ cổng ngoại vi 8 bit có kích thước bằng bao nhiêu?",
  options: [
      "64K (65536)", 
      "32K (32768)", 
      "16K (16384)", 
      "8K (8192)"
  ],
  answer: "64K (65536)"
},
{
  question: "Đối với bộ vi xử lý 8086, nếu chân ALE có mức 1 thì:",
  options: [
      "Địa chỉ của bộ nhớ hoặc ngoại vi được chốt trong CPU", 
      "Cho phép bộ chốt chốt địa chỉ từ CPU gửi trên Bus", 
      "Không cho CPU chốt địa chỉ của bộ nhớ hoặc ngoại vi", 
      "Không cho bộ chốt chốt địa chỉ từ CPU gửi trên Bus"
  ],
  answer: "Cho phép bộ chốt chốt địa chỉ từ CPU gửi trên Bus"
},
{
  question: "Tín hiệu nào sau đây của 8288 nếu ở mức tích cực sẽ cho phép đọc dữ liệu từ bộ nhớ vào CPU?",
  options: [
      "IORC", 
      "DEN", 
      "MRDC", 
      "MWDC"
  ],
  answer: "MRDC"
},
{
  question: "Tín hiệu nào sau đây của 8288 nếu ở mức tích cực sẽ cho phép ghi dữ liệu từ CPU vào bộ nhớ?",
  options: [
      "IORC", 
      "DEN", 
      "MRDC", 
      "MWDC"
  ],
  answer: "MWDC"
},
{
  question: "Tín hiệu nào sau đây của 8288 nếu ở mức tích cực sẽ cho phép ghi dữ liệu từ CPU vào cổng vào ra?",
  options: [
      "IORC", 
      "IOWC", 
      "MRDC", 
      "MWDC"
  ],
  answer: "IOWC"
},
{
  question: "Tín hiệu nào sau đây của 8288 nếu ở mức tích cực sẽ cho phép đọc dữ liệu từ cổng vào ra vào CPU?",
  options: [
      "IORC", 
      "DEN", 
      "MRDC", 
      "MWDC"
  ],
  answer: "IORC"
},
{
  question: "Tín hiệu nào sau đây của 8288 nếu ở mức tích cực sẽ thông báo cho 8288 biết là CPU ghi nhận yêu cầu ngắt?",
  options: [
      "IORC", 
      "DEN", 
      "INTA", 
      "MCE"
  ],
  answer: "INTA"
},
{
  question: "Sau khi Reset bộ vi xử lý 8086, thanh ghi cờ (FLAGS) nhận giá trị nào trong các giá trị sau đây?",
  options: [
      "02H", 
      "03H", 
      "07H", 
      "08H"
  ],
  answer: "02H"
},
{
  question: "Sau khi Reset bộ vi xử lý 8086, thanh ghi IP nhận giá trị nào trong các giá trị sau đây?",
  options: ["F000H", "FF00H", "FFF0H", "FFFFH"],
  answer: "FFF0H"
},
{
  question: "Sau khi Reset bộ vi xử lý 8086, thanh ghi CS nhận giá trị nào trong các giá trị sau đây?",
  options: ["F000H", "FF00H", "FFF0H", "FFFFH"],
  answer: "F000H"
},
{
  question: "Sau khi Reset bộ vi xử lý 8086, thanh ghi DS nhận giá trị nào trong các giá trị sau đây?",
  options: ["F000H", "FF00H", "FFF0H", "0000H"],
  answer: "0000H"
},
{
  question: "Sau khi Reset bộ vi xử lý 8086, thanh ghi ES nhận giá trị nào trong các giá trị sau đây?",
  options: ["F000H", "0000H", "FFF0H", "FFFH"],
  answer: "0000H"
},
{
  question: "Sau khi Reset bộ vi xử lý 8086, thanh ghi SS nhận giá trị nào trong các giá trị sau đây?",
  options: ["F000H", "FF00H", "0000H", "FFFFH"],
  answer: "0000H"
},
{
  question: "Sau khi Reset bộ vi xử lý 8086, cặp thanh ghi CS:IP nhận giá trị nào trong các giá trị sau đây?",
  options: ["F000H:FFF0H", "0F00H:F0F0H", "FFF0H:FFF0H", "FFFFH:0F00H"],
  answer: "F000H:FFF0H"
},
{
  question: "Trong quá trình xử lý ngắt, thanh ghi nào trong các thanh ghi sau đây chắc chắn sẽ phải thay đổi nội dung?",
  options: ["SI", "DI", "ES", "IP"],
  answer: "IP"
},
{
  question: "Sau khi Reset bộ vi xử lý 8086, lệnh nào được thực hiện đầu tiên?",
  options: ["Lệnh tại địa chỉ F000H:FFF0H", "Lệnh kiểm tra phiên bản hệ điều hành", "Lệnh tại địa chỉ FF00H:FFF0H", "Lệnh tại địa chỉ FF00H:F0F0H"],
  answer: "Lệnh tại địa chỉ F000H:FFF0H"
},
{
  question: "Khi gặp một ngắt, bộ vi xử lý thực hiện như thế nào?",
  options: ["Chạy hết chương trình đang thực hiện dở rồi phục vụ ngắt", "Bỏ qua lệnh đang thực hiện và quay ra phục vụ ngắt ngay lập tức nếu ngắt là hợp lệ", "Thực hiện xong lệnh đang thực hiện dở rồi quay ra phục vụ ngắt nêu ngắt là hợp lệ", "Bỏ qua ngắt nếu bộ vi xử lý đang thực hiện dở một chương trình khác"],
  answer: "Thực hiện xong lệnh đang thực hiện dở rồi quay ra phục vụ ngắt nêu ngắt là hợp lệ"
},
{
  question: "Sau khi thực hiện xong chương trình con phục vụ ngắt, bộ vi xử lý thực hiện như thế nào?",
  options: ["Trở về thực hiện tiếp chương trình đã bị gián đoạn do ngắt", "Khởi động lại chương trình đã bị gián đoạn do ngắt", "Khởi động lại máy tính để thực hiện lại chương trình đã bị gián đoạn do ngắt", "Trở về thực hiện lại câu lệnh trước khi có ngắt"],
  answer: "Trở về thực hiện tiếp chương trình đã bị gián đoạn do ngắt"
},
{
  question: "Địa chỉ quay về chương trình chính từ chương trình con phục vụ ngắt được lưu vào đâu trước khi chương trình con phục vụ ngắt được thực hiện?",
  options: ["Bảng vectơ ngắt", "Vùng nhớ dành riêng cho chương trình", "Vùng nhớ ngăn xếp", "Cặp thanh ghi CS:IP"],
  answer: "Vùng nhớ ngăn xếp"
},
{
  question: "Ngắt mà được gọi bởi một lệnh trong chương trình ngôn ngữ máy thì được gọi là ngắt gì trong các loại ngắt sau đây?",
  options: ["Ngắt cứng che được bằng cờ ngắt", "Ngắt cứng không che được bằng cờ ngắt", "Ngắt mềm", "Ngoại lệ phát sinh từ chính CPU"],
  answer: "Ngắt mềm"
},
{
  question: "Ngắt phát sinh từ thiết bị ngoại vi thì được gọi là ngắt gì trong các loại ngắt sau đây?",
  options: ["Ngắt cứng che được bằng cờ ngắt", "Ngắt cứng không che được bằng cờ ngắt", "Ngắt mềm", "Ngoại lệ phát sinh từ chính CPU"],
  answer: "Ngắt cứng che được bằng cờ ngắt"
},
{
  question: "Ngắt phát sinh do hỏng hóc phần cứng nghiêm trọng thì được gọi là ngắt gì trong các loại ngắt sau đây?",
  options: ["Ngắt cứng che được bằng cờ ngắt", "Ngắt cứng không che được bằng cờ ngắt", "Ngắt mềm", "Ngoại lệ phát sinh từ chính CPU"],
  answer: "Ngắt cứng không che được bằng cờ ngắt"
},
{
  question: "Ngắt phát sinh do lỗi chia cho 0 trong chương trình thì được gọi là ngắt gì trong các loại ngắt sau đây?",
  options: ["Ngắt cứng che được bằng cờ ngắt", "Ngắt cứng không che được bằng cờ ngắt", "Ngắt mềm", "Ngoại lệ phát sinh từ chính CPU"],
  answer: "Ngoại lệ phát sinh từ chính CPU"
},
{
  question: "Ngắt phát sinh do tràn bộ nhớ của bộ đồng xử lý thì được gọi là ngắt gì trong các loại ngắt sau đây?",
  options: ["Ngắt cứng che được bằng cờ ngắt", "Ngắt cứng không che được bằng cờ ngắt", "Ngắt mềm", "Ngoại lệ phát sinh từ chính CPU"],
  answer: "Ngoại lệ phát sinh từ chính CPU"
},
{
  question: "Ngắt phát sinh do mã toán không hợp lệ thì được gọi là ngắt gì trong các loại ngắt sau đây?",
  options: ["Ngắt cứng che được bằng cờ ngắt", "Ngắt cứng không che được bằng cờ ngắt", "Ngắt mềm", "Ngoại lệ phát sinh từ chính CPU"],
  answer: "Ngoại lệ phát sinh từ chính CPU"
},
{
  question: "Cơ chế DMA là gì?",
  options: ["Truy cập ngoại vi trực tiếp", "Truy cập bộ nhớ trực tiếp", "Điều khiển thiết bị ngoại vi thông qua bộ nhớ", "Điều khiển hệ thống bộ nhớ thông qua thiết bị ngoại vi"],
  answer: "Truy cập bộ nhớ trực tiếp"
},
{
  question: "DMA là viết tắt của:",
  options: ["Direct Management Access", "Direct Memory Application Access", "Direct Memory Access", "Direct Mainboard Administration"],
  answer: "Direct Memory Access"
},
{
  question: "Cơ chế DMA cho phép thực hiện điều gì?",
  options: ["Truyền dữ liệu trực tiếp giữa bộ nhớ và các thiết bị ngoại vi", "Truyền dữ liệu trực tiếp giữa bộ nhớ và các thanh ghi trong bộ vi xử lý", "Truyền dữ liệu trực tiếp giữa các thiết bị ngoại vi", "Truyền dữ liệu trực tiếp giữa các thành phần trong hệ thống bộ nhớ"],
  answer: "Truyền dữ liệu trực tiếp giữa bộ nhớ và các thiết bị ngoại vi"
},
{
  question: "Phương pháp nào sau đây là một trong các phương pháp thực hiện DMA?",
  options: [
      "Ngắt không che được",
      "Lấy cắp chu kỳ",
      "Ngắt che được",
      "Tham dò ngoại vi"
  ],
  answer: "Lấy cắp chu kỳ"
},
{
  question: "Phương pháp nào sau đây là một trong các phương pháp thực hiện DMA?",
  options: [
      "Ngắt mềm",
      "Điều khiển để CPU tự treo",
      "Ngắt không che được",
      "Tham dò ngoại vi"
  ],
  answer: "Điều khiển để CPU tự treo"
},
{
  question: "DMAC gửi tín hiệu yêu cầu CPU tự treo để thực hiện DMA qua chân nào?",
  options: [
      "DREQ",
      "HOLD",
      "HOLDA",
      "DACK"
  ],
  answer: "HOLD"
},
{
  question: "Khi CPU chấp nhận yêu cầu tự treo để thực hiện DMA thì nó sẽ báo cho DMAC qua chân nào?",
  options: [
      "DREQ",
      "HOLD",
      "HOLDA",
      "DACK"
  ],
  answer: "HOLDA"
},
{
  question: "Khi chip DMCA đang đọc dữ liệu từ ngoại vi qua địa chỉ cổng thì chân nào trong các chân sau đây phải ở mức tích cực?",
  options: [
      "/IOR",
      "/IOW",
      "/MEMR",
      "/MEMW"
  ],
  answer: "/IOR"
},
{
  question: "Khi chip DMCA đang chuyển dữ liệu tới ngoại vi qua cổng thì tương ứng với chân nào trong các chân sau đây phải ở mức tích cực?",
  options: [
      "/IOR",
      "/IOW",
      "/MEMR",
      "/MEMW"
  ],
  answer: "/IOW"
},
{
  question: "Khi chip DMCA đang đọc dữ liệu từ bộ nhớ thì tương ứng với chân nào trong các chân sau đây phải ở mức tích cực?",
  options: [
      "/IOR",
      "/IOW",
      "/MEMR",
      "/MEMW"
  ],
  answer: "/MEMR"
},
{
  question: "Khi chip DMCA đang ghi dữ liệu vào bộ nhớ thì tương ứng với chân nào trong các chân sau đây phải ở mức tích cực?",
  options: [
      "/IOR",
      "/IOW",
      "/MEMR",
      "/MEMW"
  ],
  answer: "/MEMW"
},
{
  question: "Khi CPU hoặc Bus master báo cho DMCA biết nó đã rời khỏi Bus và nhường quyền điều khiển cho DMCA thì chân nào trong các chân sau đây của DMCA phải ở mức tích cực?",
  options: [
      "HLDA",
      "ADSTB",
      "AEN",
      "HRQ"
  ],
  answer: "HLDA"
},
{
  question: "Khi DMAC cần kích hoạt để chốt địa chỉ thì chân nào trong các chân sau đây của DMCA phải ở mức tích cực?",
  options: [
      "HLDA",
      "ADSTB",
      "AEN",
      "HRQ"
  ],
  answer: "ADSTB"
},
{
  question: "Chân nào là chân chọn chip trong các chân sau đây của DMAC?",
  options: [
      "CLK",
      "/CS",
      "HRQ",
      "AEN"
  ],
  answer: "/CS"
},
{
  question: "Chân nào là lối vào của xung nhịp trong các chân sau đây của DMAC?",
  options: [
      "CLK",
      "/CS",
      "HRQ",
      "AEN"
  ],
  answer: "CLK"
},
{
  question: "Chân nào là chân báo chấp nhận DMA trong các chân sau đây của DMAC?",
  options: [
      "AEN",
      "DREQ",
      "HRQ",
      "/DACK"
  ],
  answer: "/DACK"
},
{
  question: "Chân nào là chân báo đòi hỏi DMA từ thiết bị ngoại vi trong các chân sau đây của DMAC?",
  options: [
      "AEN",
      "DREQ",
      "HRQ",
      "/DACK"
  ],
  answer: "DREQ"
},
{
  question: "Bus dữ liệu của DMAC 8237 có bao nhiêu bit?",
  options: [
      "4",
      "8",
      "16",
      "32"
  ],
  answer: "8"
},
{
  question: "Bus địa chỉ của DMAC 8237 gồm bao nhiêu bit?",
  options: [
      "8",
      "12",
      "16",
      "20"
  ],
  answer: "16"
},
{
  question: "Chân nào trong các chân sau đây báo kết thúc xử lý DMA?",
  options: [
      "AEN",
      "DREQ",
      "HRQ",
      "/EOP"
  ],
  answer: "/EOP"
},
{
  question: "Tốc độ đồng hồ của một máy tính có thể đạt giá trị khoảng:",
  options: ["500 Hz", "500 KHz", "500 MHz", "500 GHz"],
  answer: "500 MHz"
},
{
  question: "Khi chương trình con được gọi, địa chỉ quay về được cất vào:",
  options: ["Ngăn xếp", "Thanh ghi con trỏ ngăn xếp", "Cặp thanh ghi CS:IP", "Bộ đếm chương trình"],
  answer: "Ngăn xếp"
},
{
  question: "Thông thường khi một chương trình con phục vụ ngắt được thực hiện xong:",
  options: ["Bộ vi xử lý phải được khởi động lại", "Một yêu cầu ngắt xuất hiện", "Chương trình bị tạm dừng sẽ được tiếp tục thực hiện", "Hệ thống bị dừng (Halt)"],
  answer: "Chương trình bị tạm dừng sẽ được tiếp tục thực hiện"
},
{
  question: "Một tín hiệu vào của bộ vi xử lý làm cho nó tạm dừng chương trình đang thực hiện thì được gọi là:",
  options: ["Nghỉ (Break)", "Ngắt (Interrupt)", "Dừng (Stop)", "Đợi (Wait)"],
  answer: "Ngắt (Interrupt)"
},
{
  question: "Các ngắt mà bộ vi xử lý có thể bỏ qua được gọi là:",
  options: ["Ưu tiên cao", "Có thể che được", "Nhiều mức", "Không thể bị che"],
  answer: "Có thể che được"
},
{
  question: "Trong cấu trúc ngăn xếp kiểu LIFO, dữ liệu được cất vào đầu tiên được lấy ra:",
  options: ["Đầu tiên", "Cuối cùng", "Từ thanh ghi con trỏ ngăn xếp", "Từ thanh ghi cờ"],
  answer: "Cuối cùng"
},
{
  question: "Chức năng của câu lệnh Assembly sau là gì: OUT 30H, AL",
  options: [
    "Gửi nội dung thanh ghi AL ra cổng ngoại vi có địa chỉ là 30H",
    "Gửi giá trị 30H ra cổng ngoại vi có địa chỉ là nội dung thanh ghi AL",
    "Gửi giá trị 30H ra cổng ngoại vi có địa chỉ là 48",
    "Thu một byte từ cổng có địa chỉ là 30H và đặt vào thanh ghi AL"
  ],
  answer: "Gửi nội dung thanh ghi AL ra cổng ngoại vi có địa chỉ là 30H"
},
{
  question: "Chức năng của câu lệnh Assembly sau là gì? IN AL, 31H",
  options: [
    "Gửi nội dung thanh ghi AL ra cổng ngoại vi có địa chỉ là 31H",
    "Gửi giá trị 31H ra cổng ngoại vi có địa chỉ là nội dung thanh ghi AL",
    "Thu giá trị 31H từ một cổng ngoại vi và đặt vào thanh ghi AL",
    "Thu một byte từ cổng có địa chỉ là 31H, đặt vào thanh ghi AL"
  ],
  answer: "Thu một byte từ cổng có địa chỉ là 31H, đặt vào thanh ghi AL"
},
{
  question: "Biết rằng chương trình con có tên là PUTC sẽ hiển thị kí tự trong thanh ghi AL. Cho biết kết quả thực hiện đoạn lệnh Assembly sau: MOV AL, ‘C’ SUB AL, 02H CALL PUTC",
  options: ["Hiển thị chữ số 2", "Hiển thị kí tự C", "Hiển thị kí tự A", "Hiển thị kí tự trống"],
  answer: "Hiển thị kí tự A"
},
{
  question: "Biết rằng thanh ghi BL đang lưu kí tự ‘b’. Biết mã ASSCII của kí tự ‘b’ là 62H, cho biết kết quả của câu lệnh Assembly sau: AND BL, 1101 1111 B",
  options: ["Xóa thanh ghi BL", "Lưu kí tự ‘B’ vào thanh ghi BL", "Lưu giá trị 0010 0010 vào thanh ghi BL", "Nội dung thanh ghi BL không thay đổi"],
  answer: "Lưu kí tự ‘B’ vào thanh ghi BL"
},
{
  question: "Biết rằng thanh ghi AL đang lưu kí tự ‘a’. Cho biết kết quả của câu lệnh Assembly sau: AND AL, 1111 1111 B",
  options: ["Xóa thanh ghi AL", "Lưu kí tự ‘A’ vào thanh ghi AL", "Lưu giá trị 0000 0000 và thanh ghi AL", "Nội dung thanh ghi AL không thay đổi"],
  answer: "Lưu kí tự ‘A’ vào thanh ghi AL"
},
{
  question: "Trong các câu lệnh Assembly sau, câu lệnh nào không hợp lệ?",
  options: ["MoV AX, 30000", "add AL", "aNd BX, 30H", "ADD AX, 30"],
  answer: "MoV AX, 30000"
},
{
  question: "Biết rằng chương trình con có tên là PUTA sẽ hiển thị kí tự trong thanh ghi AH. Cho biết kết quả thực hiện đoạn lệnh Assembly sau: MOV AH, ‘A’ ADD AH, 2 CALL PUTA",
  options: ["Hiển thị chữ số 2", "Hiển thị kí tự C", "Hiển thị kí tự A", "Hiển thị kí tự trống"],
  answer: "Hiển thị kí tự C"
},
{
  question: "Biết rằng thanh ghi AL đang lưu kí tự ‘B’. Cho biết lệnh nào sau đây sẽ thay đổi nội dung thanh ghi BL để nó chứa kí tự ‘b’?",
  options: [
    "OR BL, 00100000B",
    "AND BL, 00100000B",
    "ADD BL, 32H",
    "ADD BL, 32"
  ],
  answer: "ADD BL, 32H"
},
{
  question: "Biết rằng thanh ghi BL đang lưu kí tự ‘c’. Cho biết lệnh nào sau đây sẽ thay đổi nội dung thanh ghi BL để nó chứa kí tự ‘C’?",
  options: [
    "OR BL, 00100000B",
    "AND BL, 00100000B",
    "SUB BL, 32",
    "ADD BL, 32"
  ],
  answer: "SUB BL, 32"
},
{
  question: "Biết rằng thanh ghi AL đang lưu kí tự ‘B’. Cho biết kết quả của câu lệnh Assembly sau: OR AL, 01000000B",
  options: [
    "Xóa thanh ghi AL",
    "Lưu kí tự ‘a’ vào thanh ghi AL",
    "Lưu giá trị 0100 0000 và thanh ghi AL",
    "Nội dung thanh ghi AL không thay đổi"
  ],
  answer: "Lưu giá trị 0100 0000 và thanh ghi AL"
},
{
  question: "Biết rằng thanh ghi AL đang lưu kí tự ‘C’. Cho biết kết quả của câu lệnh Assembly sau: SUB AL, 10B",
  options: [
    "Xóa thanh ghi AL",
    "Lưu kí tự ‘A’ vào thanh ghi AL",
    "Lưu giá trị ‘E’ và thanh ghi AL",
    "Nội dung thanh ghi AL không thay đổi"
  ],
  answer: "Lưu kí tự ‘A’ vào thanh ghi AL"
},
{
  question: "Cho đoạn lệnh sau: MOV AH, 10H; MOV AL, 16H; XCHG AL, AH; Hỏi kết quả cuối cùng thanh ghi AH bằng bao nhiêu?",
  options: ["26H", "16H", "06H", "10H"],
  answer: "16H"
},
{
  question: "Cho đoạn lệnh: MOV AH, 0A0H; MOV AL, 16H; ADD AL, AH; Hỏi kết quả cuối cùng thanh ghi AL bằng bao nhiêu?",
  options: ["26H", "84H", "0B6H", "16H"],
  answer: "0B6H"
},
{
  question: "Cho đoạn lệnh: MOV AH, 90H; MOV AL, 36H; ADD AL, AH; Hỏi kết quả cuối cùng thanh ghi AL bằng bao nhiêu?",
  options: ["6AH", "64H", "0B6H", "0C6H"],
  answer: "0C6H"
},
{
  question: "Cho đoạn lệnh: MOV AH, 0A0H; MOV AL, 0A6H; ADD AL, AH; Hỏi kết quả cuối cùng thanh ghi AH bằng bao nhiêu?",
  options: ["0A5H", "0A6H", "0A0H", "0A8H"],
  answer: "0A8H"
},
{
  question: "Cho đoạn lệnh: MOV AH, 0A0H; MOV AL, 36H; ADD AL, AH; Hỏi kết quả cuối cùng thanh ghi AL bằng bao nhiêu?",
  options: ["0D5H", "0D6H", "0D7H", "0D8H"],
  answer: "0D6H"
},
{
  question: "Cách viết nào sau đây là một lệnh Assembly?",
  options: ["MOV AL", "MOVE AL, 5", "MOV AL, 05H", "MOV 5, AL"],
  answer: "MOV AL, 05H"
},
{
  question: "Cách viết nào sau đây là một lệnh Assembly?",
  options: ["ADD AL,1", "MOVE AL, 5", "MOVE AL, 05H", "ADD AL"],
  answer: "ADD AL,1"
},
{
  question: "Cho đoạn lệnh: MOV AH, 0A0H; MOV AL, 0A6H; SUB AL, AH; Hỏi kết quả cuối cùng thanh ghi AL bằng bao nhiêu?",
  options: ["05H", "06H", "07H", "08H"],
  answer: "06H"
},
{
  question: "Cho đoạn lệnh: MOV AH, 0A0H; MOV AL, 0A6H; AND AL, AH; Hỏi kết quả cuối cùng thanh ghi AL bằng bao nhiêu?",
  options: ["0A5H", "0A6H", "0A7H", "0A0H"],
  answer: "0A0H"
},
{
  question: "Cho đoạn lệnh: MOV AH, 97H; MOV AL, 0A6H; AND AL, AH; Hỏi kết quả cuối cùng thanh ghi AL bằng bao nhiêu?",
  options: ["85H", "86H", "0A7H", "0A6H"],
  answer: "86H"
},
{
  question: "Cho đoạn lệnh: MOV AH, 97H; MOV AL, 5EH; AND AL, AH; Hỏi kết quả cuối cùng thanh ghi AL bằng bao nhiêu?",
  options: ["96H", "86H", "36H", "16H"],
  answer: "96H"
},
{
  question: "Cho đoạn lệnh: MOV AH, 97H; MOV AL, 5EH; OR AL, AH; Hỏi kết quả cuối cùng thanh ghi AL bằng bao nhiêu?",
  options: ["0DFH", "0CFH", "0ACH", "0A6H"],
  answer: "0DFH"
},
{
  question: "Cho đoạn lệnh: MOV AH, 37H; MOV AL, 5AH; OR AL, AH; Hỏi kết quả cuối cùng thanh ghi AL bằng bao nhiêu?",
  options: ["6EH", "7FH", "8CH", "0A6H"],
  answer: "7FH"
},
{
  question: "Cho đoạn lệnh: MOV CL, 04H; MOV AL, 5AH; SHL AL, CL; Hỏi kết quả cuối cùng thanh ghi AL bằng bao nhiêu?",
  options: ["6DH", "0A0H", "0D0H", "0B0H"],
  answer: "0D0H"
},
{
  question: "Cho đoạn lệnh: MOV CL, 03H; MOV AL, 5CH; SHL AL, CL; Hỏi kết quả cuối cùng thanh ghi AL bằng bao nhiêu?",
  options: ["60H", "0A0H", "0D0H", "0E0H"],
  answer: "0D0H"
},
{
  question: "Cho đoạn lệnh: MOV CL, 02H; MOV AL, 6AH; SHL AL, CL; Hỏi kết quả cuối cùng thanh ghi AL bằng bao nhiêu?",
  options: ["6CH", "0A0H", "0A8H", "0B8H"],
  answer: "0A8H"
},
{
  question: "Cho đoạn lệnh: MOV CL, 03H; MOV AL, 5CH; SHR AL, CL; Hỏi kết quả cuối cùng thanh ghi AL bằng bao nhiêu?",
  options: ["10H", "0BH", "0DH", "0EH"],
  answer: "0EH"
},
{
  question: "Cho đoạn lệnh Assembly: MOV CL, 02H; MOV AL, 6AH; SHR AL, CL; Hỏi kết quả cuối cùng thanh ghi AL bằng bao nhiêu?",
  options: ["1CH", "1AH", "2AH", "2BH"],
  answer: "1AH"
},
{
  question: "Để ghi giá trị số hexa A vào thanh ghi BH ta viết lệnh Assembly như thế nào?",
  options: ["MOV 0BH, AH", "MOV BH, 0AH", "MOV BH, AH", "MOV BH, A"],
  answer: "MOV BH, 0AH"
},
{
  question: "Nếu thanh ghi AL đang chứa mã ASSCII của một kí tự viết hoa (A đến Z), để chuyển kí tự đó thành dạng viết thường (a đến z) ta dùng lệnh Assembly nào sau đây?",
  options: ["SUB AL, 32", "SUB AL, 32H", "ADD AL, 32", "ADD AL, 32H"],
  answer: "ADD AL, 32"
},
{
  question: "Nếu thanh ghi AL đang chứa mã ASSCII của một kí tự viết thường (a đến z), để chuyển kí tự đó thành dạng viết hoa (A đến Z) ta dùng lệnh Assembly nào sau đây?",
  options: ["SUB AL, 32", "SUB AL, 32H", "ADD AL, 32", "ADD AL, 32H"],
  answer: "SUB AL, 32"
},
{
  question: "Lệnh MOV AX, [BX] là một ví dụ của chế độ định địa chỉ nào?",
  options: ["Trực tiếp", "Tức thì", "Thanh ghi", "Chỉ số"],
  answer: "Chỉ số"
},
{
  question: "Lệnh MOV [BX], AX là một ví dụ của chế độ định địa chỉ nào?",
  options: ["Trực tiếp", "Tức thì", "Gián tiếp thanh ghi", "Chỉ số"],
  answer: "Gián tiếp thanh ghi"
},
{
  question: "Lệnh MOV AX, 10 là một ví dụ của chế độ định địa chỉ nào?",
  options: ["Trực tiếp", "Tức thì", "Thanh ghi", "Chỉ số"],
  answer: "Trực tiếp"
},
{
  question: "Lệnh MOV AX, [BX] + 5 là một ví dụ của chế độ định địa chỉ nào?",
  options: ["Trực tiếp", "Thanh ghi", "Gián tiếp thanh ghi", "Chỉ số"],
  answer: "Chỉ số"
},
{
  question: "Lệnh MOV AX, BX là một ví dụ của chế độ định địa chỉ nào?",
  options: ["Trực tiếp", "Tức thì", "Thanh ghi", "Gián tiếp thanh ghi"],
  answer: "Thanh ghi"
},
{
  question: "Lệnh MOV AX, [SI] + 10 là một ví dụ của chế độ định địa chỉ nào?",
  options: ["Chỉ số", "Chỉ số cơ sở", "Thanh ghi", "Gián tiếp thanh ghi"],
  answer: "Chỉ số"
},
{
  question: "Lệnh MOV AX, [BX] + [SI] + 10 là một ví dụ của chế độ định địa chỉ nào?",
  options: ["Chỉ số", "Chỉ số cơ sở", "Thanh ghi", "Gián tiếp thanh ghi"],
  answer: "Chỉ số"
},
{
  question: "Trong các lệnh sau đây, lệnh nào thuộc chế độ định địa chỉ gián tiếp thanh ghi?",
  options: ["MOV AX, [BX]", "MOV AX, [BX] + 10", "MOV AX, [SI]", "MOV AX, 10"],
  answer: "MOV AX, [BX]"
},
{
  question: "Lệnh nào thuộc chế độ định địa chỉ tức thì?",
  options: ["MOV AX, 0A", "MOV AX, [BX]", "MOV AX, [SI] + 10", "MOV AX, [BX] + [SI]"],
  answer: "MOV AX, 0A"
},
{
  question: "Để quay trái thanh ghi AL đi 1 bit, ta dùng lệnh nào?",
  options: ["SHR AL, 1", "SHL AL, 1", "ROR AL, 1", "ROL AL, 1"],
  answer: "ROL AL, 1"
},
{
  question: "Để quay phải thanh ghi AL đi 1 bit, ta dùng lệnh nào?",
  options: ["SHR AL, 1", "SHL AL, 1", "ROR AL, 1", "ROL AL, 1"],
  answer: "ROR AL, 1"
},
{
  question: "Để lọc lấy 4 bit thấp trong thanh ghi BH thì ta sử dụng lệnh Assembly nào?",
  options: ["AND BH, 00H", "AND BH, 0FH", "AND BH, 1FH", "AND BH, 0F0H"],
  answer: "AND BH, 0FH"
},
{
  question: "Để lọc lấy 4 bit cao trong thanh ghi BH thì ta sử dụng lệnh Assembly nào?",
  options: ["AND BH, 00H", "AND BH, 0FH", "AND BH, 1FH", "AND BH, 0F0H"],
  answer: "AND BH, 0F0H"
},







  
  
  

  // Add more questions here
];

// Render quiz questions and options
const quizContainer = document.getElementById("quiz-container");
quizData.forEach((item, index) => {
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");
  questionDiv.innerText = `${index + 1}. ${item.question}`;

  const optionsDiv = document.createElement("div");
  optionsDiv.classList.add("options");
  item.options.forEach((option, i) => {
    const optionDiv = document.createElement("div");
    optionDiv.innerText = option;
    optionDiv.addEventListener("click", () => handleOptionClick(optionDiv, item.answer, option));
    optionsDiv.appendChild(optionDiv);
  });

  quizContainer.appendChild(questionDiv);
  quizContainer.appendChild(optionsDiv);
});

// Handle option click
function handleOptionClick(optionDiv, correctAnswer, selectedAnswer) {
  // Mark answer as correct or incorrect
  if (selectedAnswer === correctAnswer) {
    optionDiv.classList.add("correct");
  } else {
    optionDiv.classList.add("wrong");
    // Optionally highlight correct answer
    Array.from(optionDiv.parentNode.children).forEach(div => {
      if (div.innerText === correctAnswer) {
        div.classList.add("correct");
      }
    });
  }
}

// Submit function to show result
document.getElementById("submit-btn").addEventListener("click", () => {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Bạn đã hoàn thành bài thi!";
});
