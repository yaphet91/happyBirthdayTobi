<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if a file was uploaded
if (isset($_FILES['image'])) {
    $file = $_FILES['image'];

    // Check for errors
    if ($file['error'] === 0) {
        $fileName = $file['name'];
        $fileTmpName = $file['tmp_name'];
        $fileType = $file['type'];

        // Debugging messages
        echo "File Name: $fileName<br>";
        echo "File Type: $fileType<br>";
        echo "Temp Name: $fileTmpName<br>";

        // Ensure file is an image
        $allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (in_array($fileType, $allowedTypes)) {
            // Move the uploaded file to the uploads directory
            if (move_uploaded_file($fileTmpName, "uploads/$fileName")) {
                echo "Image uploaded successfully.";
            } else {
                echo "Error moving file to uploads directory.";
            }
        } else {
            echo "Only JPG, JPEG, PNG, and GIF files are allowed.";
        }
    } else {
        echo "Error uploading file: " . $file['error'];
    }
} else {
    echo "No file uploaded.";
}
?>
