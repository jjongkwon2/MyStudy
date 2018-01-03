package com.nainfox.binding;

import android.content.Intent;
import android.databinding.DataBindingUtil;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

import com.nainfox.binding.databinding.ActivityMainBinding;

public class MainActivity extends AppCompatActivity {
    public static final String TAG = "### MainActivity";
    public static final String NAME = "name";

    private ActivityMainBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = DataBindingUtil.setContentView(this, R.layout.activity_main);

        setButtonClickListener();
    }


    /**
     * Next Button 클릭 이벤트 제어
     */
    private void setButtonClickListener(){
        binding.nextButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String name = binding.nameEditText.getText().toString();
                Intent i = new Intent(getApplicationContext(), NextActivity.class);
                i.putExtra(NAME, name);
                startActivity(i);
                finish();
            }
        });
    }
}
