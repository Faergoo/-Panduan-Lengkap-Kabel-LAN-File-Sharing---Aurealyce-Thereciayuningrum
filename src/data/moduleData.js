export const nav = [
  ["pengertian","Pengertian"],["alat","Alat & Bahan"],["crimping","Crimping"],
  ["koneksi","Koneksi 2 Laptop"],["ping","Ping Test"],["sharing","Sharing File"],["media","Media"]];
export const profile = { name:"Aurealyce T", status:"Mahasiswa", major:"Jaringan Komputer", school:"POLITEKNIK NEGERI SRIWIJAYA", cls:"Dr. Ali Firdaus, S.Kom., M.Kom.", id:"Aurealyce T" };
export const intro = [
  ["LAN","Local Area Network adalah jaringan komputer yang mencakup area terbatas seperti ruang kelas, laboratorium, atau gedung."],
  ["Ethernet","Standar teknologi jaringan kabel yang mengatur cara perangkat mengirim data dalam bentuk frame."],
  ["UTP","Unshielded Twisted Pair: empat pasang kawat tembaga berpilin tanpa pelindung logam tambahan."],
  ["Fungsi","Menghubungkan komputer, switch, router, dan perangkat lain untuk berbagi data serta internet."],
  ["Penggunaan","Laboratorium komputer, kantor, warnet, hingga koneksi langsung antar dua laptop."]];
export const cats = [
  ["Cat 5e","1 Gbps","100 MHz","Jaringan rumah dan sekolah"],
  ["Cat 6","1-10 Gbps","250 MHz","Kantor dan lab komputer"],
  ["Cat 6a / Cat 7","10 Gbps","500-600 MHz","Data center dan jaringan berkecepatan tinggi"]];
export const cableKinds = {
  straight:{ title:"Straight-Through", fn:"Menghubungkan perangkat yang berbeda jenis.", use:"Komputer ke switch, switch ke router.", devices:"PC - Switch / Router", wiring:"T568B pada kedua ujung" },
  crossover:{ title:"Crossover", fn:"Menghubungkan perangkat sejenis secara langsung.", use:"Laptop ke laptop, switch ke switch.", devices:"PC - PC / Switch - Switch", wiring:"T568A pada satu ujung, T568B pada ujung lain" }};
export const tools = [
  ["Cable","Kabel UTP","Kabel berpilin 4 pasang, minimal Cat 5e."],
  ["Plug","Konektor RJ-45","Konektor plastik 8 pin di ujung kabel."],
  ["Wrench","Tang Crimp","Menekan konektor agar pin menembus kawat."],
  ["Scissors","Cable Stripper","Mengupas selubung kabel tanpa melukai kawat."],
  ["Activity","LAN Tester","Memeriksa kelurusan 8 jalur kabel."]];
export const steps = [
  ["Kupas kabel","Kupas selubung luar sepanjang kira-kira 2 cm."],
  ["Uraikan kabel","Pisahkan 4 pasang kawat dan luruskan."],
  ["Urutkan warna","Susun sesuai standar T568A atau T568B."],
  ["Potong rata","Potong ujung kawat sejajar, sisakan sekitar 1,2 cm."],
  ["Masukkan ke RJ-45","Dorong kawat sampai menyentuh ujung konektor."],
  ["Crimp kabel","Tekan dengan tang crimp, lalu uji dengan LAN tester."]];
const W={wg:["Putih-Hijau","#22c55e",1],g:["Hijau","#22c55e"],wo:["Putih-Oranye","#f97316",1],o:["Oranye","#f97316"],
 b:["Biru","#3b82f6"],wb:["Putih-Biru","#3b82f6",1],wc:["Putih-Coklat","#92400e",1],c:["Coklat","#92400e"]};
export const wiring = {
  T568A:["wg","g","wo","b","wb","o","wc","c"].map(k=>W[k]),
  T568B:["wo","o","wg","b","wb","g","wc","c"].map(k=>W[k])};
export const laptopSteps = ["Sambungkan kabel LAN ke kedua laptop.","Buka Control Panel.","Pilih Network and Internet.","Buka Network Connections.","Klik kanan Ethernet, pilih Properties.","Pilih Internet Protocol Version 4 (TCP/IPv4).","Isi IP Address dan Subnet Mask."];
export const ips = [["Laptop A","192.168.1.1","255.255.255.0"],["Laptop B","192.168.1.2","255.255.255.0"]];
export const pingLines = ["Pinging 192.168.1.2 with 32 bytes of data:","Reply from 192.168.1.2: bytes=32 time=1ms TTL=128","Reply from 192.168.1.2: bytes=32 time<1ms TTL=128","Reply from 192.168.1.2: bytes=32 time<1ms TTL=128","Reply from 192.168.1.2: bytes=32 time=1ms TTL=128","Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)"];
export const shareSteps = ["Aktifkan Network Discovery.","Aktifkan File and Printer Sharing.","Klik kanan folder, pilih Share.","Atur permission (Read atau Read/Write).","Akses dari laptop lain lewat \\\\192.168.1.1"];
export const media = {
  videos: [
    { title: "Video Tutorial 1", url: "https://youtu.be/sByEW9ktCNQ?si=dL-2DdtNqqb5xDHE" },
    { title: "Video Tutorial 2", url: "https://www.youtube.com/watch?v=GANTI_LINK_2" }
  ]
};