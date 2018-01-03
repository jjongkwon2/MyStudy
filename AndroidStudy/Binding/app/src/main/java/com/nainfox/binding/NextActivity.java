package com.nainfox.binding;

import android.content.Intent;
import android.databinding.DataBindingUtil;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

import com.nainfox.binding.databinding.ActivityMainBinding;
import com.nainfox.binding.databinding.ActivityNextBinding;
import com.nainfox.binding.vo.User;

public class NextActivity extends AppCompatActivity {
    public static final String TAG = "### NextActivity";
    public static final String NAME = "name";

    private ActivityNextBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = DataBindingUtil.setContentView(this, R.layout.activity_next);
        binding.setUser(new User(getIntent().getStringExtra(NAME)));
    }

}
