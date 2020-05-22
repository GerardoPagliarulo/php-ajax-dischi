<?php
// Data
include_once __DIR__ . '/../partials/data/music-info.php';
// JSON
header('Content-Type: application/json');
echo json_encode($music_info);

