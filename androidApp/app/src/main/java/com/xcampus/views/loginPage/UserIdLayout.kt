package com.xcampus.views.loginPage

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.xcampus.R
import com.xcampus.ui.theme.*

@Composable
internal fun UserIdInputLayout(modifier: Modifier = Modifier) {

    var userIdInput by remember { mutableStateOf("") }

    Column(
        modifier = modifier
    ) {
        Column(
            modifier = modifier.padding(20.dp),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            UserIdInput(
                value = userIdInput,
                modifier = Modifier.fillMaxWidth(),
                onValueChange = { userIdInput = it}
            )
            Spacer(
                modifier = Modifier.height(20.dp)
            )
            Button(
                onClick = {},
                shape = RoundedCornerShape(8.dp),
                modifier = Modifier.fillMaxWidth(),
                colors = ButtonDefaults.buttonColors(
                    containerColor = primaryButtonColor,
                    contentColor = primaryButtonTextColor
                ),

            ) {
                Text(
                    text = "Continue",
                    modifier = Modifier.padding(8.dp),
                    fontSize = 16.sp,
                    fontFamily = Poppins,
                    fontWeight = FontWeight.Bold
                )
            }
        }
    }
}

@Composable
private fun UserIdInput(value: String, modifier: Modifier = Modifier, onValueChange: (String) -> Unit) {
    TextField(
        modifier = modifier,
        value = value,
        onValueChange = onValueChange,
        placeholder = {
            Text(
                text = "Enter your email address",
                fontFamily = Poppins,
                fontWeight = FontWeight.Medium,
                fontSize = 14.sp
            )
        }
    )
}

@Preview(
    showBackground = true
)
@Composable
fun Preview() {
    XcampusTheme {
        UserIdInputLayout(
            modifier = Modifier.fillMaxSize()
        )
    }
}


