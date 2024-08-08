package com.xcampus.views.loginPage

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.xcampus.ui.theme.*

@Composable
internal fun UserIdInputLayout(modifier: Modifier = Modifier) {

    var userIdInput by remember { mutableStateOf("") }

    Column(
        modifier = modifier
    ) {
        Column(
            modifier = Modifier.padding(20.dp)
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
                shape = RoundedCornerShape(10.dp),
                modifier = Modifier.fillMaxWidth(),
                colors = ButtonDefaults.buttonColors(
                    containerColor = primaryButtonColor,
                    contentColor = primaryButtonTextColor
                )
            ) {
                Text(
                    text = "Next",
                    modifier = Modifier.padding(8.dp)
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
                text = "Enter your email address"
            )
        }
    )
}

@Preview(
    showBackground = true
)
@Composable
fun Preview() {
    UserIdInputLayout(
        modifier = Modifier.fillMaxSize()
    )
}


