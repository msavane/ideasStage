package laboratory.OpenAIExemple;

import io.cucumber.messages.internal.com.google.gson.Gson;
import io.swagger.v3.oas.annotations.tags.Tag;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Tag(name = "User API", description = "API endpoints for managing users")

public class UserController {
    public static String API_Key = "b2f215fc74cb49a8a3122427e9dc78a1";
    public static String userProperty ;
    public static String endPointUri ;
    static User UserPayLoad = new User();


    public static String provideUserInformation(String s) {
        userProperty = s;
        UserPayLoad.setUser_info(userProperty);
        return null;
    }

    public static String provideEndPointUri(String s) {
        endPointUri = s;
        return null;
    }


    public static String postTo () throws Exception{

        Gson gson = new Gson();
        String jsonRequest = gson.toJson(UserPayLoad);

        System.out.println("Request to POST: "+jsonRequest);

        HttpRequest postRequest = HttpRequest.newBuilder()
                .uri(new URI(endPointUri))
                .header("Authorization", API_Key)
                .POST(HttpRequest.BodyPublishers.ofString(jsonRequest))
                .build();
        HttpClient httpClient = HttpClient.newHttpClient();
        HttpResponse<String> postResponse = httpClient.send(postRequest, HttpResponse.BodyHandlers.ofString());
        System.out.println("Response to POST: "+postResponse.body());
        return null;
    }

}
