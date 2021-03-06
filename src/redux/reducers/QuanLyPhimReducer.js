import {
  SET_DANH_SACH_PHIM,
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
  SET_THONG_TIN_PHIM,
  OPEN_MODAL
} from "../types/QuanLyPhimType";
import { SET_CHI_TIET_PHIM } from "../types/QuanLyRapType";

const stateDefault = {
  arrFilm:[],
  // arrFilm: [
  //   {
  //     maPhim: 1323,
  //     tenPhim: "test cập nhật",
  //     biDanh: "test-cap-nhat",
  //     trailer: "fsdfas",
  //     hinhAnh:
  //       "https://movienew.cybersoft.edu.vn/hinhanh/test-cap-nhat_gp10.jpg",
  //     moTa: "string",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2001-02-12T00:00:00",
  //     danhGia: 8,
  //     hot: false,
  //     dangChieu: true,
  //     sapChieu: false,
  //   },
  //   {
  //     maPhim: 1338,
  //     tenPhim: "Fight for my way",
  //     biDanh: "fight-for-my-way",
  //     trailer: "https://www.youtube.com/embed/9l5KoxFqQZY",
  //     hinhAnh:
  //       "https://movienew.cybersoft.edu.vn/hinhanh/fight-for-my-way_gp10.jpg",
  //     moTa: "The story is about underdogs with big dreams and third-rate specs struggling to survive, and craving for success with a career they're underqualified for. A long time friendship is blossoming into romance between two immature friends Ko Dong-man (Park Seo-joon) and Choi Ae-ra (Kim Ji-won) whose childish dynamic hasn't changed despite reaching adulthood",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2021-04-06T07:07:38.223",
  //     danhGia: 10,
  //     hot: true,
  //     dangChieu: false,
  //     sapChieu: true,
  //   },
  //   {
  //     maPhim: 1353,
  //     tenPhim: "Bloodshot 1",
  //     biDanh: "bloodshot-1",
  //     trailer: "https://www.youtube.com/embed/vOUVVDWdXbo",
  //     hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/bloodshot_gp10.jpg",
  //     moTa: "Bloodshot is a 2020 American superhero film based on the Valiant Comics character of the same name. It is intended to be the first installment in a series of films set within a Valiant Comics shared cinematic universe.[3] Directed by David S. F. Wilson (in his feature directorial debut) from a screenplay by Jeff Wadlow and Eric Heisserer and a story by Wadlow,[4] the film stars Vin Diesel, Eiza González, Sam Heughan, Toby Kebbell, and Guy Pearce.",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2021-04-08T07:10:04.043",
  //     danhGia: 10,
  //     hot: false,
  //     dangChieu: true,
  //     sapChieu: false,
  //   },
  //   {
  //     maPhim: 1368,
  //     tenPhim: "Annabelle",
  //     biDanh: "annabelle",
  //     trailer: "https://www.youtube.com/embed/EMa-KFfatT0",
  //     hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/annabelle_gp10.jpg",
  //     moTa: "Là một bộ phim kinh dị siêu nhiên của Mỹ năm 2019 do Gary Dauberman đạo diễn, trong tác phẩm đầu tay của ông, từ kịch bản của Dauberman và một câu chuyện của Dauberman và James Wan , người cũng đóng vai trò là nhà sản xuất với Peter Safra",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2020-04-25T00:00:00",
  //     danhGia: 10,
  //     hot: true,
  //     dangChieu: false,
  //     sapChieu: true,
  //   },
  //   {
  //     maPhim: 1383,
  //     tenPhim: "Avenger",
  //     biDanh: "avenger",
  //     trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
  //     hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/avenger_gp10.jpg",
  //     moTa: " The versions of the film shows in AMC Theaters as part of a Avengers Marvel Phase One marathon features an exclusive intro from Agent Coulson, talking about the film and the character. These Coulson intros were later includes as bonuses in the Avengers Phase One box set. ",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2020-07-21T00:00:00",
  //     danhGia: 10,
  //     hot: false,
  //     dangChieu: true,
  //     sapChieu: false,
  //   },
  //   {
  //     maPhim: 1398,
  //     tenPhim: "Itawon class",
  //     biDanh: "itawon-class",
  //     trailer: "https://www.youtube.com/embed/NeaHNQJ1kCo",
  //     hinhAnh:
  //       "https://movienew.cybersoft.edu.vn/hinhanh/itawon-class_gp10.jpg",
  //     moTa: "The story is about underdogs with big dreams and third-rate specs struggling to survive, craving for success with a career they're underqualified for. A long time friendship is blossoming into romance between two immature friends Ko Dong-man (Park Seo-joon) and Choi Ae-ra (Kim Ji-won) whose childish dynamic hasn't changed despite reaching adulthood",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2020-02-09T00:00:00",
  //     danhGia: 10,
  //     hot: true,
  //     dangChieu: false,
  //     sapChieu: true,
  //   },
  //   {
  //     maPhim: 1413,
  //     tenPhim: "Underwater",
  //     biDanh: "underwater",
  //     trailer: "https://www.youtube.com/embed/jCFWEzIVILc",
  //     hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/underwater_gp10.jpg",
  //     moTa: "Disaster strikes more than six miles below the ocean surface when water crashes through the walls of a drilling station. Led by their captain, the survivors realize that their only hope is to walk across the sea floor to reach the main part of the facility. But they soon find themselves in a fight for their lives when they come under attack from mysterious and deadly creatures that no one has ever seen.",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2021-02-02T00:00:00",
  //     danhGia: 5,
  //     hot: false,
  //     dangChieu: true,
  //     sapChieu: false,
  //   },
  //   {
  //     maPhim: 1428,
  //     tenPhim: "Iron man 3",
  //     biDanh: "iron-man-3",
  //     trailer: "https://www.youtube.com/embed/Ke1Y3P9D0Bc",
  //     hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/iron-man-3_gp10.jpg",
  //     moTa: "4/24/2013 · Marvel's \"Iron Man 3\" pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy's hands, he embarks on a harrowing quest to find those responsible. This journey, at …",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2020-06-28T00:00:00",
  //     danhGia: 5,
  //     hot: true,
  //     dangChieu: false,
  //     sapChieu: true,
  //   },
  //   {
  //     maPhim: 1443,
  //     tenPhim: "Shadow hunter",
  //     biDanh: "shadow-hunter",
  //     trailer: "https://www.youtube.com/embed/5_dBOjU1w48",
  //     hinhAnh:
  //       "https://movienew.cybersoft.edu.vn/hinhanh/shadow-hunter_gp10.jpg",
  //     moTa: "New York teenager Clary Fray learns a secret about herself, which leads her into an adventurous journey. Clary is one of the Shadowhunters, a secret cadre of half-angel warriors who fight demons.",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2020-02-02T00:00:00",
  //     danhGia: 6,
  //     hot: false,
  //     dangChieu: true,
  //     sapChieu: false,
  //   },
  //   {
  //     maPhim: 1458,
  //     tenPhim: "Fast And Furious",
  //     biDanh: "fast-and-furious",
  //     trailer: "https://www.youtube.com/embed/uisBaTkQAEs",
  //     hinhAnh:
  //       "https://movienew.cybersoft.edu.vn/hinhanh/fast-and-furious_gp10.jpg",
  //     moTa: 'The Fate of the Furious Theatrical release poster Directed byF. Gary Gray Produced by Neal H. Moritz Vin Diesel Michael Fottrell Chris Morgan Written byChris Morgan Based onCharacters by Gary Scott Thompson Starring Vin Diesel Dwayne Johnson Jason Statham Michelle Rodriguez Tyrese Gibson Chris "Ludacris" Bridges Scott Eastwood Nathalie Emmanuel Elsa Pataky Kurt Russell Charlize Theron Music byBrian Tyler CinematographyStephen F. Windon Edited by Christian Wagner Paul Rubell Production co…',
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2021-06-19T00:00:00",
  //     danhGia: null,
  //     hot: true,
  //     dangChieu: false,
  //     sapChieu: true,
  //   },
  //   {
  //     maPhim: 1473,
  //     tenPhim: "Em chưa 18",
  //     biDanh: "em-chua-18",
  //     trailer: "https://www.youtube.com/embed/xqY59FOcUy8",
  //     hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/em-chua-18_gp10.jpg",
  //     moTa: "Em chưa 18 tuy lấy bối cảnh trường học nhưng lại không giống với bất cứ phim học đường nào trước đây khi trang phục, câu chuyện của từng cặp diễn viên đều mang một màu sắc hiện đại, trẻ trung và năng động.",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2020-08-25T00:00:00",
  //     danhGia: 5,
  //     hot: false,
  //     dangChieu: true,
  //     sapChieu: false,
  //   },
  //   {
  //     maPhim: 1488,
  //     tenPhim: "The Walking Dead SS10",
  //     biDanh: "the-walking-dead-ss10",
  //     trailer: "https://www.youtube.com/embed/R1v0uFms68U",
  //     hinhAnh:
  //       "https://movienew.cybersoft.edu.vn/hinhanh/the-walking-dead-ss10_gp10.jpg",
  //     moTa: "Sheriff's Deputy Rick Grimes leads a group of survivors in a world overrun by zombies.",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2021-12-11T00:00:00",
  //     danhGia: 10,
  //     hot: true,
  //     dangChieu: false,
  //     sapChieu: true,
  //   },
  //   {
  //     maPhim: 1503,
  //     tenPhim: "Southpaw",
  //     biDanh: "southpaw",
  //     trailer: "https://www.youtube.com/embed/Mh2ebPxhoLs",
  //     hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/southpaw.jpg",
  //     moTa: "Boxer Billy Hope turns to trainer Tick Willis to help him get his life back on track after losing his wife in a tragic accident and his daughter to child protection services.",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2019-07-29T00:00:00",
  //     danhGia: 5,
  //     hot: false,
  //     dangChieu: true,
  //     sapChieu: false,
  //   },
  //   {
  //     maPhim: 1518,
  //     tenPhim: "Underwater 2020",
  //     biDanh: "underwater-2020",
  //     trailer: "https://www.youtube.com/embed/NsyjFihG5k8",
  //     hinhAnh:
  //       "https://movienew.cybersoft.edu.vn/hinhanh/underwater-2020_gp10.jpg",
  //     moTa: "Disaster strikes more than six miles below the ocean surface when water crashes through the walls of a drilling station. Led by their captain, the survivors realize that their only hope is to walk across the sea floor to reach the main part of the facility. But they soon find themselves in a fight for their lives when they come under attack from mysterious and deadly creatures that no one has ever seen.",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2020-01-01T00:00:00",
  //     danhGia: 5,
  //     hot: true,
  //     dangChieu: false,
  //     sapChieu: true,
  //   },
  //   {
  //     maPhim: 1533,
  //     tenPhim: "Avengers: Infinity Warr ",
  //     biDanh: "avengers-infinity-warr",
  //     trailer: "https://www.youtube.com/embed/DKqu9qc-5f4",
  //     hinhAnh:
  //       "https://movienew.cybersoft.edu.vn/hinhanh/avengers-infinity-warr_gp10.jpg",
  //     moTa: '"Biệt đội siêu anh hùng Avengers và những đồng minh sẽ phải sẵn sàng hi sinh tính mạng để chống lại siêu ác nhân hùng mạnh Thanos trước khi hắn phá huỷ mọi thứ và đặt dấu chấm hết cho vũ trụ."',
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2019-07-29T00:00:00",
  //     danhGia: 9,
  //     hot: false,
  //     dangChieu: true,
  //     sapChieu: false,
  //   },
  //   {
  //     maPhim: 1548,
  //     tenPhim: "Captain Marvel",
  //     biDanh: "captain-marvel",
  //     trailer: "https://www.youtube.com/embed/0LHxvxdRnYc",
  //     hinhAnh:
  //       "https://movienew.cybersoft.edu.vn/hinhanh/captain-marvel_gp10.jpg",
  //     moTa: "Lấy bối cảnh những năm 90s, Captain Marvel là một cuộc phiêu lưu hoàn toàn mới đến với một thời kỳ chưa từng xuất hiện trong vũ trụ điện ảnh Marvel. Bộ phim kể về con đường trở thành siêu anh hùng mạnh mẽ nhất vũ trụ của Carol Danvers. Bên cạnh đó, trận chiến ảnh hưởng đến toàn vũ trụ giữa tộc Kree và tộc Skrull đã lan đến Trái Đất, liệu Danvers và các đồng minh có thể ngăn chặn binh đoàn Skrull cũng như các thảm họa tương lai?",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2020-05-17T00:00:00",
  //     danhGia: 9,
  //     hot: true,
  //     dangChieu: false,
  //     sapChieu: true,
  //   },
  //   {
  //     maPhim: 2026,
  //     tenPhim: "Joker 2020",
  //     biDanh: "joker-2020",
  //     trailer: "https://www.youtube.com/embed/-_DJEzZk2pc",
  //     hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/joker-2020_gp10.jpg",
  //     moTa: "JOKER từ lâu đã là siêu ác nhân huyền thoại của điện ảnh thế giới. Nhưng có bao giờ bạn tự hỏi, Joker đến từ đâu và điều gì đã biến Joker trở thành biểu tượng tội lỗi của thành phố Gotham? JOKER sẽ là cái nhìn độc đáo về tên ác nhân khét tiếng của Vũ trụ DC – một câu chuyện gốc thấm nhuần, nhưng tách biệt rõ ràng với những truyền thuyết quen thuộc xoay quanh nhân vật mang đầy tính biểu tượng này.",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2020-04-01T00:00:00",
  //     danhGia: 4,
  //     hot: true,
  //     dangChieu: false,
  //     sapChieu: true,
  //   },
  //   {
  //     maPhim: 2027,
  //     tenPhim: "Mắt biếc",
  //     biDanh: "mat-biec",
  //     trailer: "https://www.youtube.com/embed/ITlQ0oU7tDA",
  //     hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/mat-biec_gp10.jpg",
  //     moTa: "Mắt biếc xoay quanh mối tình đơn phương của Ngạn với Hà Lan, cô bạn gái có cặp mắt hút hồn nhưng cá tính bướng bỉnh. Một chuyện tình nhiều cung bậc, từ ngộ nghĩnh trẻ con, rồi tình yêu thuở học trò trong sáng, trải qua bao biến cố, trở thành một cuộc “đuổi hình bắt bóng” buồn da diết nhưng không nguôi hi vọng. Câu chuyện càng trở nên éo le hơn khi Trà Long - con gái của Hà Lan, lớn lên lại nhen nhóm một tình yêu như thế với Ngạn…",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2020-01-12T00:00:00",
  //     danhGia: 5,
  //     hot: false,
  //     dangChieu: true,
  //     sapChieu: false,
  //   },
  //   {
  //     maPhim: 2212,
  //     tenPhim: "End Game",
  //     biDanh: "end-game",
  //     trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
  //     hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/end-game_gp10.jpg",
  //     moTa: "“Avengers: Endgame” là phần kết mỹ mãn cho chuyến hành trình đầu tiên kéo dài hơn 10 năm của MCU, với câu chuyện hấp dẫn, giàu cảm xúc, và hàng loạt mối kết nối chặt chẽ.",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2020-07-31T00:00:00",
  //     danhGia: 7,
  //     hot: true,
  //     dangChieu: false,
  //     sapChieu: true,
  //   },
  //   {
  //     maPhim: 2352,
  //     tenPhim: "The Boss Baby 2",
  //     biDanh: "the-boss-baby-2",
  //     trailer: "https://www.youtube.com/embed/YXYCZVHeLe8",
  //     hinhAnh:
  //       "https://movienew.cybersoft.edu.vn/hinhanh/the-boss-baby-2_gp10.jpg",
  //     moTa: "Một phim hoạt hình 3D của Mỹ năm 2017, dựa trên cuốn sách tranh cùng tên năm 2010 của Marla Frazze",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2020-03-01T00:00:00",
  //     danhGia: 10,
  //     hot: false,
  //     dangChieu: true,
  //     sapChieu: false,
  //   },
  //   {
  //     maPhim: 3098,
  //     tenPhim: "AudioPhile (C18)",
  //     biDanh: "audiophile-c18-",
  //     trailer: "https://www.youtube.com/embed/FaABYp7R5jE",
  //     hinhAnh:
  //       "https://movienew.cybersoft.edu.vn/hinhanh/dau-an-vo-cuc-c18-_gp10.jpg",
  //     moTa: "Sau khi bị . phá sản gia đình William trở về nông trại được thừa kế. Ở đây, cô con gái nhỏ Marry trò chuyện được với linh hồn bí ẩn... Mọi điều kỳ lạ bắt đầu xảy ra...",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2021-07-23T15:35:42.053",
  //     danhGia: 10,
  //     hot: true,
  //     dangChieu: false,
  //     sapChieu: true,
  //   },
  //   {
  //     maPhim: 3099,
  //     tenPhim: "BÀ HOÀNG NÓI DỐI 2020",
  //     biDanh: "ba-hoang-noi-doi-2020",
  //     trailer: "https://www.youtube.com/embed/AE2Dnk1x1_g",
  //     hinhAnh:
  //       "https://movienew.cybersoft.edu.vn/hinhanh/ba-hoang-noi-doi-2020_gp10.jpg",
  //     moTa: "Bộ phim xoay quanh câu chuyện của nữ nghị sĩ Joo Sang Sook với khả năng nói dối “như cơm bữa”, nhờ đó bà gặt hái được rất nhiều thành công trong sự nghiệp chính trị. Đột nhiên một ngày nọ, bà Joo không thể nói dối được nữa. Sự việc trở nên hết sức nguy cấp khi ngày tranh cử đã gần kề, liệu Joo Sang Sook có thành công đắc cử lần thứ tư hay không khi mọi lời bà nói ra đều là sự thật nghiệt ngã?",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2021-07-24T11:45:20.727",
  //     danhGia: 10,
  //     hot: false,
  //     dangChieu: true,
  //     sapChieu: false,
  //   },
  //   {
  //     maPhim: 3104,
  //     tenPhim: "SA MẠC CHẾT",
  //     biDanh: "sa-mac-chet",
  //     trailer: "https://www.youtube.com/embed/pvTLTeu4Ufw",
  //     hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/sa-mac-chet_gp10.jpg",
  //     moTa: "Một tàu không gian gặp nạn, rơi xuống thị trấn hoang mạc yên bình. Vụ va chạm đã giải pháp một loại ký sinh trùng quỷ quái, tấn công mọi vật thể sống chúng tiếp xúc, khiến vật chủ mất ý thức, trở nên bạo lực và sở hữu sức mạnh khác thường.",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2020-10-21T00:00:00",
  //     danhGia: 10,
  //     hot: true,
  //     dangChieu: false,
  //     sapChieu: true,
  //   },
  //   {
  //     maPhim: 3117,
  //     tenPhim: "King Of Fighter",
  //     biDanh: "king-of-fighter",
  //     trailer: "https://www.youtube.com/embed/vOYHtBc9Vb4",
  //     hinhAnh:
  //       "https://movienew.cybersoft.edu.vn/hinhanh/king-of-fighter_gp10.jpg",
  //     moTa: "Presenting a brand new CG Anime series for the world-renowned fighting game series, THE KING OF FIGHTERS! The story centers on iconic KOF characters such as Kyo Kusanagi, Terry Bogard, Mai Shiranui, Geese Howard, and Ryo Sakazaki! Many voice actors from the game series also reprise their roles! Experience the epic KOF storyline as never before with this new CG anime! Releasing this summer with a total of 24 episodes planned!",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2020-09-30T00:00:00",
  //     danhGia: 10,
  //     hot: false,
  //     dangChieu: true,
  //     sapChieu: false,
  //   },
  //   {
  //     maPhim: 3178,
  //     tenPhim: "Trận Chiến Midway",
  //     biDanh: "tran-chien-midway",
  //     trailer: "https://www.youtube.com/embed/l9laReRAYFk",
  //     hinhAnh:
  //       "https://movienew.cybersoft.edu.vn/hinhanh/tran-chien-midway_gp10.png",
  //     moTa: "Vào ngày 7 tháng 12 năm 1941, quân đội Nhật Bản đã tiến hành một cuộc tấn công tàn khốc vào Trân Châu Cảng, căn cứ hải quân của Hoa Kỳ ở Hawaii. Sáu tháng sau, Trận Midway bắt đầu vào ngày 4 tháng 6 năm 1942, khi hải quân Nhật Bản một lần nữa lên kế hoạch tấn công các tàu Mỹ ở Thái Bình Dương. Trong ba ngày tiếp theo, Hải quân Hoa Kỳ và một đội phi công dũng cảm đã quyết chiến với kẻ thù trong một trong những trận chiến quan trọng và mang tính quyết định của Thế chiến II.",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2020-09-29T00:00:00",
  //     danhGia: 10,
  //     hot: false,
  //     dangChieu: true,
  //     sapChieu: false,
  //   },
  //   {
  //     maPhim: 3292,
  //     tenPhim: "Cơn Mưa Tình Đầu",
  //     biDanh: "con-mua-tinh-dau",
  //     trailer: "https://www.youtube.com/embed/bwlWSoeU254",
  //     hinhAnh:
  //       "https://movienew.cybersoft.edu.vn/hinhanh/con-mua-tinh-dau_gp10.jpg",
  //     moTa: "Phim là sự đan xen của hai câu chuyện tình yêu cách nhau 3 thập kỷ. Bota và cô bạn thân Poppy cùng cảm nắng Non – một anh bạn cùng trường đại học. ",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2020-09-29T00:00:00",
  //     danhGia: 10,
  //     hot: true,
  //     dangChieu: false,
  //     sapChieu: true,
  //   },
  //   {
  //     maPhim: 4742,
  //     tenPhim: "Gia Đình Croods",
  //     biDanh: "gia-dinh-croods",
  //     trailer: "https://www.youtube.com/embed/D6P0xcxonXo",
  //     hinhAnh:
  //       "https://movienew.cybersoft.edu.vn/hinhanh/gia-dinh-croods_gp10.jpg",
  //     moTa: "Sinh tồn trong một thế giới tiền sử luôn rình rập hiểm nguy từ đủ loài quái thú hung dữ cho tới thảm họa ngày tận thế, Nhà Croods chưa từng một lần chùn bước. Nhưng giờ đây họ sẽ phải đối mặt với thử thách lớn nhất từ trước tới nay: chung sống với một gia đình khác. Để tìm kiếm một mái nhà an toàn hơn, Nhà Croods bắt đầu hành trình khám phá thế giới tiến tới những vùng đất xa xôi đầy tiềm năng. Một ngày nọ, họ tình cờ lạc vào một nơi yên bình có đầy đủ mọi tiện nghi hiện đại và biệt lập với tường vây bao quanh. Tưởng rằng mọi vấn đề trong cuộc sống sẽ được giải quyết thì Nhà Croods lại phải chấp nhận với sự thật rằng đã có một gia đình khác định cư ở đây đó chính là Nhà Bettermans.",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2020-12-01T00:00:00",
  //     danhGia: 10,
  //     hot: true,
  //     dangChieu: false,
  //     sapChieu: true,
  //   },
  //   {
  //     maPhim: 5209,
  //     tenPhim: "Thợ săn quái vật",
  //     biDanh: "tho-san-quai-vat",
  //     trailer: "https://www.youtube.com/embed/puQyZsaTtqY",
  //     hinhAnh:
  //       "https://movienew.cybersoft.edu.vn/hinhanh/tho-san-quai-vat_gp10.png",
  //     moTa: "Monster Hunter được chuyển thể từ series game nổi tiếng cùng tên của Capcom. Trong phim, đội trưởng Artemis của nữ diễn viên Milla Jovovich (Resident Evil) và đồng đội đã vô tình bước qua một cánh cửa bí ẩn dẫn tới thế giới khác. Tại đây, họ phải chiến đấu với nhiều loài quái vật khổng lồ trong hành trình trở về thế giới. Đồng hành với họ trong trận chiến là nhân vật “Thợ săn” của nam diễn viên Tony Jaa (Ong Bak). Monster Hunter hứa hẹn sẽ là bom tấn hành động với những màn săn quái vật khổng lồ hoành tráng nhất năm 2020.",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2021-01-17T04:57:24.79",
  //     danhGia: 10,
  //     hot: false,
  //     dangChieu: true,
  //     sapChieu: false,
  //   },
  //   {
  //     maPhim: 6168,
  //     tenPhim: " Bố Già",
  //     biDanh: "bo-gia",
  //     trailer: "https://www.youtube.com/embed/-ir2IflOHv4",
  //     hinhAnh:
  //       "https://movienew.cybersoft.edu.vn/hinhanh/bo-gia-vuong_gp10.jpg",
  //     moTa: "Phim sẽ xoay quanh lối sống thường nhật của một xóm lao động nghèo, ở đó có bộ tứ anh em Giàu - Sang - Phú - Quý với Ba Sang sẽ là nhân vật chính, hay lo chuyện bao đồng nhưng vô cùng thương con cái. Câu chuyện phim tập trung về hai cha con Ba Sang (Trấn Thành) và Quắn (Tuấn Trần). Dù yêu thương nhau nhưng khoảng cách thế hệ đã đem đến những bất đồng lớn giữa hai cha con. Liệu cả hai có thể cho nhau cơ hội thấu hiểu đối phương, thu hẹp khoảng cách và tạo nên hạnh phúc từ sự khác biệt?",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2021-03-28T00:00:00",
  //     danhGia: 10,
  //     hot: null,
  //     dangChieu: null,
  //     sapChieu: null,
  //   },
  //   {
  //     maPhim: 7033,
  //     tenPhim: "Black Widow",
  //     biDanh: "black-widow",
  //     trailer: "https://www.youtube.com/embed/8zyi9DrUb2Q",
  //     hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/black-widow_gp10.jpg",
  //     moTa: "Cùng với cái chết của Iron Man, sự ra đi của Black Widow Natasha Romanoff là mất mát không thể thay thế của team Avengers. Người phụ nữ vừa mạnh mẽ vừa dịu dàng, coi Biệt Đội Siêu Anh Hùng như “gia đình” đã ra đi mãi mãi để đổi lấy viên đá linh hồn. Sự hy sinh của cô để lại trong lòng các fan vũ trụ điện ảnh Marvel niềm đau khó tả.",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2021-06-29T00:00:00",
  //     danhGia: 10,
  //     hot: null,
  //     dangChieu: null,
  //     sapChieu: null,
  //   },
  //   {
  //     maPhim: 7034,
  //     tenPhim: "Chìa khóa trăm tỷ",
  //     biDanh: "chia-khoa-tram-ty",
  //     trailer: "https://www.youtube.com/embed/eM8DijtwwFE",
  //     hinhAnh:
  //       "https://movienew.cybersoft.edu.vn/hinhanh/chia-khoa-tram-ty_gp10.jpg",
  //     moTa: 'Sau một năm 2020 thành công rực rỡ với Đôi Mắt Âm Dương, Tiệc Trăng Máu và đặc biệt là siêu phẩm Chị Mười Ba, "nữ hoàng làng hài" Thu Trang trở thành cái tên bảo chứng cho bất kỳ dự án nào mà cô tham gia.  Mở màn cho mùa phim Việt 2021, Thu Trang cùng người "anh em" lâu năm của mình là Kiều Minh Tuấn - nam diễn viên thuộc phái thực lực hàng đầu hiện nay, sẽ cùng góp mặt trong Chìa Khóa Trăm Tỷ của đạo diễn Võ Thanh Hòa.',
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2021-06-29T00:00:00",
  //     danhGia: 10,
  //     hot: null,
  //     dangChieu: null,
  //     sapChieu: null,
  //   },
  //   {
  //     maPhim: 7040,
  //     tenPhim: "Mortal Kombat ",
  //     biDanh: "mortal-kombat",
  //     trailer: "https://www.youtube.com/embed/Eru0ZDdfcvw",
  //     hinhAnh:
  //       "https://movienew.cybersoft.edu.vn/hinhanh/mortal-kombat_gp10.jpg",
  //     moTa: "Võ sĩ Cole Young mang trên người vết chàm rồng đen bí ẩn - biểu tượng của Mortal Kombat. Cole chẳng hề biết về dòng máu bí ẩn của mình cũng như tại sao tên sát thủ Sub-Zero săn lùng anh. Vì bảo vệ gia đình, Cole cùng một nhóm chiến binh được tuyển chọn để tham gia một trận chiến đẫm máu. Tất cả sẽ như thế nào, xin mời bạn đón xem",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2021-07-03T00:00:00",
  //     danhGia: 10,
  //     hot: null,
  //     dangChieu: null,
  //     sapChieu: null,
  //   },
  //   {
  //     maPhim: 7209,
  //     tenPhim: "ẤN QUỶ",
  //     biDanh: "an-quy",
  //     trailer: "https://www.youtube.com/watch?v=98W8bv_8Kz8",
  //     hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/an-quy_gp10.png",
  //     moTa: "Bộ phim xoay quanh cựu nhà báo nổi tiếng Fenn hiện đang thất nghiệp vì dính vào vụ bê bối làm phóng sự giả để câu view. Và cô bé Alice bị câm điếc bẩm sinh từ nhỏ hiện đang sống tại một thị trấn ven.\n\nAlice là trẻ mồ côi và được bác mình - một Đức Cha nuôi nấng từ lúc còn nhỏ. Những người sống trong thị trấn của cô bé rất sùng đạo, nên khi có tin Alice nhờ Đức mẹ Maria mà nói được cô bé đã trở thành đức tin của hàng trăm người xung quanh vùng và hàng triệu người trên cả nước.\n\nSự kỳ diệu đó không mang lại những niềm vui được bao lâu, khi nhà báo Fenn dần nhận ra những điều kỳ lạ liên tục xuất hiện sau sự kiện này, nhất là sau khi ông nghe được lời cảnh báo đến từ bác của Alice về quỷ dữ Satan.",
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2021-07-05T00:00:00",
  //     danhGia: 10,
  //     hot: null,
  //     dangChieu: null,
  //     sapChieu: null,
  //   },
  //   {
  //     maPhim: 7286,
  //     tenPhim: "Vệ sĩ sát thủ 2",
  //     biDanh: "ve-si-sat-thu-2",
  //     trailer: "https://www.youtube.com/watch?v=En56TciBPlw",
  //     hinhAnh:
  //       "https://movienew.cybersoft.edu.vn/hinhanh/ve-si-sat-thu-2_gp10.jpg",
  //     moTa: 'The Hitman\'s Bodyguard 2017 Trong phim Killer Bodyguard, Ryan Reynolds sẽ vào vai một chuyên gia an ninh, được xếp hạng AAA, còn Samuel Jackson sẽ hóa thân thành nhân vật sát thủ bị săn đuổi. tuyệt nhất thế giới. Hai người họ như hai người không chung số phận, buộc phải "che chở" cho nhau suốt 24 giờ. Thật trớ trêu khi một sát thủ “khét tiếng” đôi khi lại cần đến vệ sĩ riêng. Và trên hành trình từ Anh đến The Hague, họ sẽ phải đối mặt và “xử lý” nhiều tình huống nguy hiểm hay sự truy đuổi của nhiều nhóm khác nhau.',
  //     maNhom: "GP10",
  //     ngayKhoiChieu: "2021-07-05T00:00:00",
  //     danhGia: 10,
  //     hot: null,
  //     dangChieu: null,
  //     sapChieu: null,
  //   },
  // ],

  dangChieu: false,
  sapChieu: false,
  arrFilmDefault: [],
  filmDetail:{},
  thongTinPhim:{},
  openModal: false,
  maPhimModal: 0,
  
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM: {
      state.arrFilm = action.arrFilm;
      state.arrFilmDefault = state.arrFilm;
      console.log('arrFilm',state.arrFilm);
      return { ...state };
    }

    case SET_FILM_SAP_CHIEU: {
      if(state.dangChieu === true){
        state.dangChieu = !state.dangChieu
      }
      state.sapChieu = !state.sapChieu;

      state.arrFilm = state.arrFilmDefault.filter(
        (film) =>
          film.sapChieu === state.sapChieu);
          console.log('sapChieu',state.arrFilm);
      return { ...state };
    }

    case SET_FILM_DANG_CHIEU: {
      if(state.sapChieu === true){
        state.sapChieu = !state.sapChieu;
      }
      state.dangChieu = !state.dangChieu;

      state.arrFilm = state.arrFilmDefault.filter(
        (film) =>
          film.dangChieu === state.dangChieu);
          console.log('dangChieu',state.arrFilm);
      return { ...state };
    }

    case SET_CHI_TIET_PHIM: {
      state.filmDetail = action.filmDetail;
      return { ...state };
    }

    case SET_THONG_TIN_PHIM: {
      state.thongTinPhim = action.thongTinPhim;
      return { ...state };
    }

    case OPEN_MODAL: {
      state.openModal = !state.openModal;
      state.maPhimModal = action.maPhimModal;
      console.log("action.maPhimModal", action.maPhimModal);
      return { ...state };
    }

    default:
      return { ...state };
  }
};
