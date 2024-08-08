package com.xcampus.ui.theme

import androidx.compose.ui.res.fontResource
import androidx.compose.ui.text.font.Font
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import com.xcampus.R

// Popping font family
val Poppins = FontFamily(
    Font(
        resId = R.font.medium,
        weight = FontWeight.Medium
    ),
    Font(
        resId = R.font.semi_bold,
        weight = FontWeight.SemiBold
    ),
    Font(
        resId = R.font.bold,
        weight = FontWeight.Bold
    ),
)