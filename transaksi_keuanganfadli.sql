-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 04 Jan 2024 pada 03.34
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_2201414_fadli_uas_pilkomb`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaksi_keuanganfadli`
--

CREATE TABLE `transaksi_keuanganfadli` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `description` text NOT NULL,
  `amount` bigint(20) NOT NULL,
  `status` enum('debit','kredit') NOT NULL,
  `receiver` varchar(50) NOT NULL,
  `jk` enum('P','L') NOT NULL,
  `no_telp` varchar(13) NOT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `transaksi_keuanganfadli`
--

INSERT INTO `transaksi_keuanganfadli` (`id`, `date`, `description`, `amount`, `status`, `receiver`, `jk`, `no_telp`, `address`) VALUES
(1, '2024-01-01', 'dana prodi ', 4000000, 'debit', 'Naurah', 'P', '085684523698', 'Geger Kalong'),
(2, '2024-01-01', 'sewa labschool', 2000000, 'debit', 'Fadli', 'L', '087546985421', 'Setiabudhi'),
(3, '2024-01-01', 'sewa futsal', 1000000, 'debit', 'Ahmad', 'L', '082546323652', 'UPI'),
(4, '2024-01-01', 'dana bem', 3500000, 'kredit', 'Fadli', 'L', '087879854545', 'Setiabudhi'),
(5, '2024-01-01', 'sewa gymnas', 5000000, 'kredit', 'Risna', 'L', '08564587985', 'Cempaka');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `transaksi_keuanganfadli`
--
ALTER TABLE `transaksi_keuanganfadli`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `transaksi_keuanganfadli`
--
ALTER TABLE `transaksi_keuanganfadli`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
