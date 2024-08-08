package com.xcampus.logic

// Function to validate a email address
fun validateEmailAddress(string: String): Boolean {
    if (string.length <= 10) {
        return false;
    }
    return true
}