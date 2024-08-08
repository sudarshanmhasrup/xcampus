import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.xcampus.views.loginPage.UserIdInputLayout

@Composable
fun LoginPage(modifier: Modifier = Modifier) {
    UserIdInputLayout(
        modifier = modifier
    )
}

@Preview(
    showBackground = true
)
@Composable
fun Preview() {
    LoginPage(
        modifier = Modifier.fillMaxSize()
    )
}