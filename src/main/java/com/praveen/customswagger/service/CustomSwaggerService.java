package com.praveen.customswagger.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.io.StringWriter;
import java.io.Writer;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

@Service
public class CustomSwaggerService {

	public String getSwaggerSpec(String appName) throws Exception {
		String link = "https://raw.githubusercontent.com/praveenorugantitech/praveenoruganti-swagger-specs/master/"
				+ appName + ".yml";
		URL swaggerspecURL = new URL(link);
		HttpURLConnection swaggerSpecHttp = (HttpURLConnection) swaggerspecURL.openConnection();
		InputStream swaggerSpecStream = swaggerSpecHttp.getInputStream();
		return swaggerSpecGetStringFromStream(swaggerSpecStream);

	}

	private String swaggerSpecGetStringFromStream(InputStream swaggerSpecStream) throws IOException {
		if (swaggerSpecStream != null) {
			Writer swaggerSpecWriter = new StringWriter();
			char[] swaggerSpecBuffer = new char[2048];
			try {
				Reader swaggerSpecReader = new BufferedReader(new InputStreamReader(swaggerSpecStream, "UTF-8"));
				int counter;
				while ((counter = swaggerSpecReader.read(swaggerSpecBuffer)) != -1) {
					swaggerSpecWriter.write(swaggerSpecBuffer, 0, counter);
				}
			} finally {
				swaggerSpecStream.close();
			}
			return swaggerSpecWriter.toString();
		} else {
			return "No Contents";
		}
	}

	public List<String> getFileList() throws Exception {
		List<String> fileList = new ArrayList<>();
		String link = "https://api.github.com/repos/praveenorugantitech/praveenoruganti-swagger-specs/git/trees/master?recursive=1";
		URL swaggerspecURL = new URL(link);
		HttpURLConnection swaggerSpecHttp = (HttpURLConnection) swaggerspecURL.openConnection();
		
		swaggerSpecHttp.setRequestProperty("Authorization", "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");
		InputStream swaggerSpecStream = swaggerSpecHttp.getInputStream();
		String data = swaggerSpecGetStringFromStream(swaggerSpecStream);
		JSONObject obj = new JSONObject(data);
		JSONArray arr = obj.getJSONArray("tree");
		for (int i = 0; i < arr.length(); i++) {
			if (arr.getJSONObject(i).getString("path").contains("yml")) {
				fileList.add(arr.getJSONObject(i).getString("path").replace(".yml",""));
			}
		}

		return fileList;

	}

}
