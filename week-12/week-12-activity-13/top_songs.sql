CREATE TABLE `topsongs` (
  `id` int(11) DEFAULT NULL,
  `artist` text,
  `song` text,
  `year` int(11) DEFAULT NULL,
  `world` double DEFAULT NULL,
  `us` double DEFAULT NULL,
  `uk` double DEFAULT NULL,
  `eu` double DEFAULT NULL,
  `other` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
SELECT * FROM top_songsdb.topsongs;